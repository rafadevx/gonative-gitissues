import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ repo, navigation }) => (
  <View style={styles.container}>
    <View style={styles.repoInfo}>
      <Image style={styles.avatar} source={{ uri: repo.avatar }} />
      <View style={styles.repoName}>
        <Text style={styles.title}>{repo.name}</Text>
        <Text style={styles.org}>{repo.organization}</Text>
      </View>
    </View>
    <TouchableOpacity
      style={styles.buttonGo}
      onPress={() => {
        navigation.navigate('Issues', {
          title: repo.name,
          repository: `${repo.organization}/${repo.name}`,
        });
      }}
    >
      <Icon name="chevron-right" style={styles.icon} />
    </TouchableOpacity>
  </View>
);

RepositoryItem.propTypes = {
  repo: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    organization: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(RepositoryItem);
