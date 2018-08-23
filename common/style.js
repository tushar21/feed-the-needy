import { StyleSheet } from 'react-native';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {  
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomColor: '#ccc',
    borderBottomWidth : 1
  },
  list: {
    padding: 15,
    fontSize: 20,
    /* height: 84,  */
    borderBottomColor: '#ccc',
    borderBottomWidth : 1
  },
  screen : {
    backgroundColor : '#fff',
    flex: 1 
  },
  textInput : {
    margin: 15,
    height: 50,
    // borderColor: '#7EC0EE',
    // borderWidth: 2
  },
  button: {
    width: 20,
    alignSelf: 'stretch'
  }
})

export default styles;