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

    // shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // shadow (Android)
    elevation: 3,
  },

  // LEFT SIDE (TEXT AREA)
  leftContent: {
    flex: 1,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },

  // DELETE BUTTON 🚀
  deleteBtn: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  deleteText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },

  // OPTIONAL: STATUS (if needed styling override)
  status: {
    marginTop: 4,
  },

});

export default styles;