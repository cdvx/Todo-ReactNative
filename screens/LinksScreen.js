import React, { Component } from 'react';
import { StyleSheet, View,Text, Dimensions } from 'react-native';

export default class Todo extends Component {
  render() {
    const {title, detail, tags, categories} = this.props;
    console.log('\n\n >>>> ', title, detail)
    return (
      <View style={styles.container}>
        <Text style={{margin: 10}} >Task: {title}</Text>
        <Text style={{margin: 10}}>{detail}</Text>
        <Text style={{margin: 10}}>Tags: {tags}</Text>
        <Text style={{margin: 10}}>Categories: {categories}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width * 0.98,
    flexDirection: "column",
    flexWrap: "nowrap",
    padding: 15,
    marginTop: 4,
    marginLeft: 3,
    marginBottom:3,
    borderRadius: 10,
    elevation: 0.5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    // borderColor: "black",
    // borderWidth: 2,
    backgroundColor: '#f0f8ff',
  },
});
