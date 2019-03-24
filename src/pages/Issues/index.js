import React, { Component } from 'react';

import {View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';

import api from '~/services/api';

import IssueItem from './IssueItem';

import styles from './styles';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', 'Issues'),
  });

  state = {
    issues: [],
    loading: true,
    filterStatus: 'all', 
  };

  filterArray = [];

  async componentDidMount() {
    const { navigation } = this.props;
    const { data } = await api.get(`/repos/${navigation.getParam('repository', '')}/issues?state=all`);
    this.setState({ issues: data, loading: false });
    this.filterArray = data;
  }

  renderItem = ({ item }) => <IssueItem issue={item} />

  renderList = () => {
    const { issues } = this.state;
    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
      />
    );
  }

  handleFilter = (status) => {
    this.setState({ filterStatus: status });
    if (status !== 'all') {
      const newData = this.filterArray.filter(item => item.state === status);
      this.setState({ issues: newData });
    } else {
      this.setState({ issues: this.filterArray });
    }

  }

  render() {
    const { loading, filterStatus } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={() => {this.handleFilter('all')}}>
            <Text style={[styles.filter, filterStatus === 'all' && styles.activeFilter]}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.handleFilter('open')}}>
            <Text style={[styles.filter, filterStatus === 'open' && styles.activeFilter]}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.handleFilter('closed')}}>
            <Text style={[styles.filter, filterStatus === 'closed' && styles.activeFilter]}>Fechadas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.list}>
          {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
        </View>
      </View>
    );
  }
}
