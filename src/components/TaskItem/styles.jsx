
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#FFFFFF',

    padding: 18,
    borderRadius: 14,

    marginBottom: 14,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.08,
    shadowRadius: 4.65,

    elevation: 4,
  },

  title: {
    fontSize: 17,
    color: '#1E293B',

    fontFamily: 'Poppins-Bold',

    flex: 1,
  },

  pending: {
    backgroundColor: '#FEF3C7',
    color: '#D97706',

    paddingHorizontal: 12,
    paddingVertical: 6,

    borderRadius: 20,

    fontSize: 13,

    fontFamily: 'Poppins-Medium',
  },

  completed: {
    backgroundColor: '#DCFCE7',
    color: '#15803D',

    paddingHorizontal: 12,
    paddingVertical: 6,

    borderRadius: 20,

    fontSize: 13,

    fontFamily: 'Poppins-Medium',
  },

});

export default styles;



