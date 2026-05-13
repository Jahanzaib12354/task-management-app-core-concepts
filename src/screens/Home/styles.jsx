import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  headerTitle: {
    fontSize: 26,
    fontFamily: 'Montserrat-Bold', // ✅ ADDED
    color: '#0F172A',
    marginBottom: 12,
  },

  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  listContainer: {
    paddingBottom: 20,
  },

  emptyContainer: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold', // ✅ ADDED
    color: '#94A3B8',
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Montserrat-Bold', // ✅ ADDED
    color: '#64748B',
  },

});

export default styles;