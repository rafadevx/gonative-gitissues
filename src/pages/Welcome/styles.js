import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  form: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 2,
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 30,
    paddingHorizontal: metrics.basePadding,
  },

  buttonAdd: {
    height: 30,
    marginLeft: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    fontSize: 20,
  },

  error: {
    color: colors.danger,
    marginTop: metrics.baseMargin,
  },

  loading: {
    marginTop: metrics.baseMargin,
  },
});

export default styles;
