
import React, {Component} from 'react';
import {MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.entryView}>
        <Modal
          animationType="slide"
          transparent={false}
          // style={}
          // presentationStyle="fullScreen"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{/*justifyContent: 'flex-end',*/ margin: 0, borderWidth: 5, flexDirection:"row", alignItems:"center"}}>
            <View style={styles.modal} id={"this"}>
              <Text>Hello World!</Text>

              <TouchableHighlight 
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{color: "blue"}}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight style={styles.touchableHighlight}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <ColoredRaisedButton />
          
          {/* <Text style={styles.taskAdd}>Add task</Text> */}
        </TouchableHighlight>
      </View>
    );
  }
}

const ColoredRaisedButton = MKButton.coloredButton()
  .withText('BUTTON')
  .withOnPress(() => {
    console.log("Hi, it's a colored button!");
  })
  .build();
<ColoredRaisedButton/>

const styles = StyleSheet.create({
  // outer:{
  //   flex:4 ,
  //   flexDirection: "row",
  //   justifyContent: 'flex-end',
  //   height: "100%"
  // },
  modal :{
    // flex: 2,
    height: "70%", 
    flexDirection: 'column',
    overflow:"visible",
    // flex: 1,
    justifyContent: 'flex-end',
    // marginBottom: 36,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    // marginBottom: 0, 
    marginTop: "80%",
    borderColor: "blue", 
    borderWidth: 3, 
    backgroundColor: "green", 
    width: "100%"
},
  taskAdd: {
    flexDirection:"row",
    alignSelf:"center",
    paddingTop:5,
    alignItems: "center",
    height:30,
    marginBottom:0
  },
  touchableHighlight: {
    width: "100%",
    borderWidth:2,
    backgroundColor:"green",
    borderColor:"white",
  },
  entryView:{
    marginTop: 300,
    width: "100%",
    flex:0, justifyContent: 'center', alignItems: "center",
    
  }
});