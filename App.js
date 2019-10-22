import React, { Component } from 'react';
import { ScrollView, Image,  Text } from 'react-native';


export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  _onPressButton(){
    alert('You tapped the button!')
  }
  _onLongPressButton(){
    alert('You long-pressed the button!')
  }
  render(){

    return (
      <ScrollView>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Text style={{fontSize:96}}>If you like</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Text style={{fontSize:96}}>Scrolling dowm</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Text style={{fontSize:96}}>What's the best</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Text style={{fontSize:96}}>Framework around?</Text>
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Image source={{ uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width:64,height:64 }} />
        <Text style={{fontSize:96}}>React Native</Text>
      </ScrollView>
    );
  }
} 


