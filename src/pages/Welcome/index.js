import React, { Component } from 'react';

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import api from '~/services/api';

import RepositoryItem from './RepositoryItem';

import styles from './styles';

export default class Welcome extends Component {
  static navigationOptions = {
    title: 'GitIssues',
    headerBackTitle: null,
  };

  state = {
    repository: '',
    repositories: [],
    loading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      const repos = await AsyncStorage.getItem('@gitissues:repos');
      if (repos) {
        this.setState({ repositories: JSON.parse(repos) });
      }
    } catch (err) {
      console.tron.log('não foi possível obter repositórios');
    }
    // AsyncStorage.clear();
  }

  checkRepository = async (repoName) => {
    const { data } = await api.get(`/repos/${repoName}`);

    const repo = {
      id: data.id,
      name: data.name,
      organization: data.owner.login,
      avatar: data.owner.avatar_url,
    };

    return repo;
  };

  storageItem = async (item) => {
    try {
      await AsyncStorage.setItem('@gitissues:repos', JSON.stringify(item));
    } catch (err) {
      console.tron.log('erro ao gravar na store');
    }
  };

  addRepository = async () => {
    const { repository, repositories } = this.state;
    this.setState({ loading: true });
    try {
      const repo = await this.checkRepository(repository);

      this.setState({
        repository: '',
        repositories: [...repositories, repo],
        loading: false,
        error: false,
      });
      await this.storageItem([...repositories, repo]);
    } catch (err) {
      this.setState({ error: true, loading: false });
      console.tron.log(err);
    }
  };

  renderItem = ({ item }) => <RepositoryItem repo={item} />;

  renderList = () => {
    const { repositories } = this.state;

    return (
      <FlatList
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
      />
    );
  };

  render() {
    const { repository, error, loading } = this.state;
    return (
      <View style={styles.container}>
        {error && <Text style={styles.error}>Repositório não encontrado</Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={repository}
            onChangeText={text => this.setState({ repository: text })}
          />
          <TouchableOpacity style={styles.buttonAdd} onPress={this.addRepository}>
            <Icon name="plus" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View>
          {loading && <ActivityIndicator style={styles.loading} />}
          {this.renderList()}
        </View>
      </View>
    );
  }
}
