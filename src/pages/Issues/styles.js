import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  filterContainer: {
    backgroundColor: colors.light,
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius,
    height: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  filter: {
    color: colors.regular,
    fontSize: 14,
  },

  activeFilter: {
    color: colors.dark,
    fontSize: 15,
    fontWeight: 'bold',
  },

  loading: {
    marginTop: metrics.baseMargin,
  },
});

export default styles;
