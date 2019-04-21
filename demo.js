/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Swipeout from 'react-native-swipeout'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Rightbuttons: [
        {
          backgroundColor: 'red',
          color: 'white',
          text: 'Rbutton1',
          onPress: () => { this.aaaa() }
        },
        {
          backgroundColor: 'blue',
          color: 'white',
          text: 'Rbutton2',
          onPress: () => { this.aaaa() }
        },
        {
          backgroundColor: 'green',
          color: 'white',
          text: 'Rbutton3',
          onPress: () => { this.aaaa() }
        },
      ],
      Leftbuttons: [
        {
          backgroundColor: 'red',
          color: 'white',
          text: 'Lbutton1',
          onPress: () => { this.aaaa() }
        },
        {
          backgroundColor: 'blue',
          color: 'white',
          text: 'Lbutton2',
          onPress: () => { this.aaaa() }
        },
        {
          backgroundColor: 'green',
          color: 'white',
          text: 'Lbutton3',
          onPress: () => { this.aaaa() }
        },
      ]
    }

    this.aaaa = this.aaaa.bind(this);
  }
  aaaa() {
    console.log('123');
  }

  _childView = () => {
   let view = (<TouchableOpacity onPress={()=>{

    console.log('detail')
  }}>
      <View style={styles.containerItem}>
        <Image style={styles.itemImg} source={{ uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1391206089,2029672096&fm=26&gp=0.jpg' }} />
        <View style={styles.itemRightContent}>
          <Text style={styles.title}>{'hahhahah'}</Text>
          <View style={styles.itemRightBottom}>
            <Text style={styles.userName}>{'南山'}</Text>
            <Text style={styles.userName}>{'2019-09'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>)
    return view

  }

  render() {
    let views = this._childView()
    return (
      <View style={styles.container}>

        <Swipeout right={this.state.Rightbuttons}>

          {views}

        </Swipeout>

        <Swipeout left={this.state.Leftbuttons}>

          {views}

        </Swipeout>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    flex: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    color: 'black'
  },
  itemImg: {
    width: 88,
    height: 66,
    marginRight: 10
  },
  itemRightContent: {
    flex: 1,
    flexDirection: 'column'
  },
  itemRightBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
    flex: 1,
    fontSize: 14,
    color: '#87CEFA',
    marginTop: 5,
    marginRight: 5
  }
});
