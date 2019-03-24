import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  repoInfo: {
    flexDirection: 'row',
  },

  avatar: {
    height: 40,
    width: 40,
    marginRight: metrics.baseMargin,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  org: {
    fontSize: 12,
    color: colors.regular,
  },

  buttonGo: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    color: colors.regular,
  },
});

export default styles;
