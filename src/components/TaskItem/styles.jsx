import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
  },
  leftContent: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  deleteBtn: {
    backgroundColor: '#fefefe',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  status: {
    marginTop: 4,
  },
});

export default styles;