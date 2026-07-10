import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 18,
    padding: 10,
    textAlign: 'right',
    color: '#000',
  },
  result: {
    marginTop: 28,
    fontSize: 16,
  },
  // Custom Keyboard Styles
  keyboardContainer: {
    backgroundColor: '#E5E7EB', // Subtle light grey background matching OS layout
    padding: 4,
    paddingBottom: 24, // Added padding for device gesture bars
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  key: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    margin: 3,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    // Soft shadow replication
    elevation: 1, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  functionalKey: {
    backgroundColor: '#CBD5E1', // Grayish tint for operation buttons on the right
  },
  checkKey: {
    backgroundColor: '#3B82F6', // Blue color matching the checkmark button
  },
  keyText: {
    fontSize: 20,
    color: '#1F2937',
  },
  checkKeyText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});