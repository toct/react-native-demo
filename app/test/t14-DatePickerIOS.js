/***
 * Use DatePickerIOS to render a date/time picker (selector) on iOS. 
 * This is a controlled component, so you must hook in to the onDateChange
 *  callback and update the date prop in order for the component to update, 
 * otherwise the user's change will be reverted immediately to reflect props.date 
 * as the source of truth
 */


import React, { Component } from 'react'
import {
  DatePickerIOS,
  View,
  StyleSheet,
  Text,
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  render() {
    return (
      <View style={styles.container}>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
         <Text style={styles.dateDisplay}>{this.state.chosenDate.toDateString()}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  dateDisplay:{
      marginTop:40,
      textAlign:'center',
  }
})
