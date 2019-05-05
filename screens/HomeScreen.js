import React, { Component } from 'react';
import {
  // AsyncStorage,
  Image,
  Platform,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from "react-redux";

import { Container, Header, H1, H3, H2, Content, Toast } from "native-base";
// import { Button } from 'react-native-material-design';
// import AsyncStorage from '@react-native-community/async-storage';

import AsyncStorage from '@react-native-community/async-storage';
// import { WebBrowser } from 'expo';

import Todo from "./LinksScreen";

import ModalExample from "./SettingsScreen";

// import { MonoText } from '../components/StyledText';
// import { TextInput } from 'react-native-gesture-handler';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    data : Promise.resolve(_retrieveData()).then((result)=>(result))
  }

  componentWillMount(){
    const data = _retrieveData()
    Promise.resolve(data).then((result)=>{
      console.log('\n\n this part runs', result);
      this.setState({result})
    })
  }

  _renderItem = ({item}) => {
    console.log("\n\n renderring shts here>>>", item)
    return (
      <Todo 
      title={item.title} 
      detail={item.detail} 
      tags={item.tags}
      />
      );
      
  };

  _handleTextChange = event => {
    this._storeData(todos)
    // console.warn("\nclicked >>", todos, '\n\n')

  };

  _storeData = async (data)=> {
    try {
      data = JSON.stringify(data)
      // console.warn('\n\n\ data here 11>>> ', data)
      await AsyncStorage.setItem( "tasks", data)
    } catch (error){
      console.error('\n\n error here setting>>>', error)
    }
  };


  render() {
    
    console.log(`\n\n state  title >>>${this.state.data._55}\n\n`)
    const { data } = this.state.data ? this.state : null
    console.log(`\n\n title >>>${data}\n\n`)
    // console.log(`\n\n title ${title} \n\n details ${detail} \n\n`)
    return (
      <View style={styles.container}>
      
        <View style={styles.welcomeContainer}>
          <Text styel={styles.textS}>TODO</Text>
        </View>
        <View style={styles.welcomeUser}>
        {/* <Container> */}
        <Content>
          <H1 style={{fontWeight: "bold"}}> Hey User!</H1>
          <Text style={{padding: 6}}>
            Looks like you've got work to do!
          </Text>

        </Content>
        
      </View>
        {console.log("\n\n data ringing >>", data._55)}
        {!data && <Text>No tasks added!</Text>}
        {data && <FlatList data={data._55} renderItem={this._renderItem} />
        }
        <ModalExample  this_obj={this} storeData={this._storeData}/>
        
      </View>
    );
  }
}

_addKeysToTasks = todos => {
  const todos_ = todos.map((todo)=>(Object.assign(todo, { key: todo.title })))
  console.log('\n\n tidoss', todos_)
  return todos_
};

_retrieveData = async () => {
  try {
    const data = await AsyncStorage.getItem('tasks');
    Promise.resolve(data)
    // console.warn('\n\n >>>', data,'\n\n')
    return data !== null ? _addKeysToTasks(JSON.parse(data)) : null;
  } catch (error){
    console.error('\n\n error here retrieving>>>', error)
  }
};


const todos = [
  {title: "This one", detail: "this detail", tags: "2345", categories:'work'},
  {title: "This one too", detail: "this detail tooo", tags: "2345", categories:'school'}
];


export const mapStateToProps = state => state;

export const mapDispatchToProps = dispatch => ({
  loginUser: loginData => dispatch(login(loginData))
});

// export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
  container: { flex: 1,
  // justifyContent: "center",
  width: "100%",
  flexDirection: "column",
  // alignItems: "flex-end",
  alignItems: "flex-start",
  backgroundColor: "#f0f8ff",
  paddingTop: 0,
},
welcomeUser: {
  flexDirection: 'row',
    alignItems: 'flex-end',
    width: "100%",
    justifyContent: "center",
    // borderRadius: 15,
    height: 75,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#f0f8ff",
    // backgroundColor: "blue",
},
  textS: {
    flex: 4,
    fontSize: 25,
    marginBottom:30, 
    flexDirection:"column",
    alignItems: "center",
    color: "blue"
  },
  welcomeContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      width: "100%",
      justifyContent: "center",
      // borderRadius: 15,
      height: 85,
      padding: 10,
      backgroundColor: "#f0f8ff",
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 2,
      // borderColor: "white",
      // borderWidth: 5,
    },
    input: {
      fontSize: 15,
      borderColor: 'gray',
      padding: 2,
      marginTop: 3,
      width: "100%",
      borderWidth: 2,
      borderRadius: 1,
      color: "blue"
    },
    list: {
      flex:1,
      width:"100%",
      flexDirection: "row",
      backgroundColor: 'gray'
    }
});