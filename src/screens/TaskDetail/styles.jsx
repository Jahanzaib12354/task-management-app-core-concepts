


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',

    marginBottom: 20,
    fontFamily: 'Poppins-Bold',
  },

  label: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 10,
    marginBottom: 6,
    fontFamily: 'Poppins-Medium',
  },

  pending: {
    fontSize: 16,
    color: '#D97706',
    backgroundColor: '#FEF3C7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    borderRadius: 20,
    fontFamily: 'Poppins-Medium',
  },

  completed: {
    fontSize: 16,
    color: '#15803D',
    backgroundColor: '#DCFCE7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    borderRadius: 20,
    fontFamily: 'Poppins-Medium',
  },

  button: {
    backgroundColor: '#2563EB',

    marginTop: 30,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',

    fontFamily: 'Poppins-SemiBold',
  },

});

export default styles;