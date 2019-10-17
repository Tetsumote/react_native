import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';


class Greeting extends Component{
  render(){
    return(
      <View style={styles.greeting}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    )
  }
}
class Blink extends Component{
  componentDidMount(){
    setInterval(() => (
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    ),3000)
  }
  state = {isShowingText:true}
  render(){
    if(!this.state.isShowingText){
      return null;
    }
    return (
      <Text>{this.props.text}</Text>
    );
  } 
}
export default class Bananas extends Component {
  render(){

    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! and have fun.</Text>
        <Image source={pic} style={{ width:193, height:110 }} />
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
        <Blink text='I love to blink'/>
      </View>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting:{
    alignItems:'center'
  }
});
