
import React, {Component} from 'react';
import {MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import { Text, TouchableWithoutFeedback, TouchableHighlight, ScrollView, Dimensions, View, Alert, StyleSheet} from 'react-native';
import Modal from "react-native-modal";
import { Container, Header, H1, H3, H2, Button, Input, Radio, ListItem, /*Radio,*/ Left, Right, Item, Form, Content, Toast } from "native-base";

import { connect } from 'react-redux';
import CheckBox from 'react-native-check-box';

export default class ModalExample extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const {this_obj, storeData} = this.props;
    return (
      <View style={styles.entryView}>
        <TouchableWithoutFeedback style={{backgroundColor: "blue"}} onPress={() => this.setState({modalVisible: false})}>
            <Modal
              animationType="fade"
              transparent={true}
              // backdropColor="#B4B3DB"
              backdropColor="gray"
              backdropOpacity={0.8}
              avoidKeyboard={true}
              style={{justifyContent: 'flex-end',
              margin: 0}}
              // presentationStyle="fullScreen"
              isVisible={this.state.modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View>
              {/* <View style={{ margin: 0, borderWidth: 5, flexDirection:"row", alignItems:"center"}}> */}
                <View style={styles.modal}>
                <Content style={{padding:10, height: 100 , width: Dimensions.get('window').width , borderSize: 2, marginTop:0, flex: 0.5, flexDirection: "column"}}>
                  <H3 style={{fontWeight: "bold", marginLeft: 20}}>Create New Task</H3>

                  <Form style={{width:Dimensions.get('window').width, color: "blue"}}>
                    <Item  style={{ marginLeft: 20}}>
                    <Input style={{ fontSize: 17}} placeholder="Create New Task" />
                  </Item>
                  </Form>
                </Content>
                
                {/* <View style={{backgroundColor:"blue", width:Dimensions.get('window').width}}> */}
                <ScrollView style={{/*backgroundColor:"blue",*/ width:Dimensions.get('window').width}}>
                  
                  <CustomCheckBox this_obj={this} content={"College"}/>
                  <CustomCheckBox this_obj={this} content={"Work"}/>
                  <CustomCheckBox this_obj={this} content={"Study"}/>
                  <CustomCheckBox this_obj={this} content={"Sport"}/>
              
                </ScrollView>
                {/* </View> */}

                  <TouchableHighlight 
                    style={{backgroundColor: "#261BB7", position: "absolute", bottom: 30, height: 75, width: Dimensions.get('window').width,}}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}>
                    <Text style={{color: "yellow", flex: 1, fontWeight: "bold", marginStart: "40%", marginTop: 15, marginEnd: "30%"}}>+ Add Task</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            </TouchableWithoutFeedback>
            <TouchableHighlight style={styles.touchableHighlight}
              onPress={(e) => {
                this.setModalVisible(true);
                this_obj._handleTextChange(e)
              }}>
              {/* <ColoredRaisedButton /> */}
              
              <Text style={styles.taskAdd}>+</Text>
            </TouchableHighlight>
        {/* </TouchableWithoutFeedback> */}
       
      </View>
    );
  }
}

class CustomCheckBox extends Component{
  state = {
    isChecked: false
  }

  render(){
    const {content} = this.props;
    return (
      <View style={{borderSize: 30, flexDirection:"row", }}>
      <CheckBox
        checkBoxColor={"#261BB7"}
        style={{flex: 1, padding: 10, borderRadius: 50 }}
        onClick={()=>{
          this.setState({
              isChecked:!this.state.isChecked
          })
        }}
        isChecked={this.state.isChecked}
        // checkedImage={<Image source={require('../../page/my/img/ic_check_box.png')} />}
      />
      <TouchableHighlight
      onPress={()=>{
        // console.warn("\n\n Okay this is it!")
        this.setState({
            isChecked:!this.state.isChecked
        })
      }}
      underlayColor={"#f0f8ff"}
      style={{position:"absolute", left: 30, flex: 1, padding: 10, marginTop: 3.5}}
      >
      <Text >{content}</Text>
      </TouchableHighlight>
      </View>
      )
  }
}


export const mapStateToProps = state => state;

export const mapDispatchToProps = dispatch => ({
  loginUser: loginData => dispatch(login(loginData))
});

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
 


const styles = StyleSheet.create({
 
  modal :{
    // flex: 2,
    height: "70%", 
    flexDirection: 'row',
    overflow:"visible",
    flexWrap: "wrap",
    // flex: 1,
    backgroundColor: "#f0f8ff",
    // backgroundColor: "blue",
    justifyContent: 'center',
    // marginBottom: 36,
    // justifyContent: 'center',
    alignItems: 'flex-start',
    // padding: 30,
    // marginBottom: 0, 
    marginTop: "80%",
    borderColor: "#f0f8ff", 
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    borderWidth: 3, 
    borderRadius: 15,
    // backgroundColor: "#f0f8ff", 
    width: "100%"
},
  taskAdd: {
    flexDirection:"column",
    alignSelf:"center",
    color: "yellow",
    // padding:10,
    alignItems: "center",
    fontSize: 30,
    // height:30,
    marginTop:7,
    // marginBottom: 30
    
  },
  touchableHighlight: {
    width: 60,
    height: 60,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    padding:5,
    borderRadius: 1000,
    backgroundColor:"#261BB7",
    // borderColor:"white",
    marginLeft: Dimensions.get('window').width * 0.70
  },
  entryView:{
    // marginTop: 300,
    width: "100%",
    flex:0, justifyContent: 'center', alignItems: "center",
    
  }
});