import { StyleSheet } from 'react-native';

//Estilo da aplicação
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 25
  },
  image: {
    width: 150,
    height: 150
  },
  textInput: {
    width: '80%',
    padding: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    color: '#fff',
    margin: 5,
    backgroundColor: '#495057'
  },
  button: {
    backgroundColor: '#fca311',
    width: '50%',
    padding: 5,
    borderRadius: 3,
    marginTop: 5
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#ef233c',
    width: '50%',
    padding: 5,
    borderRadius: 3,
    marginTop: 10
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 300
  },
  uploadButton: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#D4EBF8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 2
  },
  uploadImage: {
    width: 150,
    height: 150,
    borderRadius: 1
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  supplierContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    height: 350,
    borderRadius: 45,
    backgroundColor: '#343434',
  }
});

export default styles;