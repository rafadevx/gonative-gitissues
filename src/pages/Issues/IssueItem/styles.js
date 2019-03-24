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

  issueInfo: {
    flexDirection: 'row',
  },

  avatar: {
    height: 40,
    width: 40,
    marginRight: metrics.baseMargin,
    borderRadius: metrics.baseRadius * 7,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    width: metrics.screenWidth - 170,
  },

  user: {
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
