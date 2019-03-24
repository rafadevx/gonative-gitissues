import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Image, Text, TouchableOpacity, Linking,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const IssueItem = ({ issue }) => (
  <View style={styles.container}>
    <View style={styles.issueInfo}>
      <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
      <View style={styles.issueName}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {issue.title}
        </Text>
        <Text style={styles.user}>{issue.user.login}</Text>
      </View>
    </View>
    <TouchableOpacity
      style={styles.buttonGo}
      onPress={() => {
        Linking.openURL(issue.html_url);
      }}
    >
      <Icon name="chevron-right" style={styles.icon} />
    </TouchableOpacity>
  </View>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
    html_url: PropTypes.string,
    user: PropTypes.shape({
      login: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
  }).isRequired,
};

export default IssueItem;
