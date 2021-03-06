import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "",
        };
    }

    handleChangeText(text){
        const {onChange} = this.props;

        this.setState({
            text,
        }, () => {onChange(text);
        });
    }

    render() {
        const {text} = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Artist Search:</Text>
                <TextInput 
                style={styles.input}
                value={text}
                onChangeText={text => this.handleChangeText(text)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {},
    input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 20,
        height: 40,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    container: {
        backgroundColor: 'yellow',
    },
});  

/*
*
* INSTRUCTIONS:
*
* 1. add an import statement that will include React and Component from React
* 2. import specific components from react-native - View, Text, TextInput, Stylesheet
* 3. Search is a SMART component because it will be handling STATE information.
*
* - accepting a value from the user can change the state of a value used by other components
* - classically (for now) we will use class-based syntax to make this component smart.
*
* 4.  create a class statement code block that identifies the class called Search extending Component
*
* - ensure that it is the default class for this file.
* - ensure this class is available to be used externally by marking it as exportable.
*
* 5. define an empty constructor function that takes in a set of values from Search's parent (called _props_) and passes it to this component's parent constructor using super();
*
* 6. Define this component's render method as returning a View container, that contains
*
* - a Text field that will display the title for this component with the words "Artist Search"
* - a TextInput field whose styles are identified in the next step
*
* 7. Similar to the styles constant in App.js, create a stylesheet for this component with the following details:
*
* text: {},
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    height: 40,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  container: {
  },
*
*
* */


// perform steps (1) and (2) here


// begin step (4) here

// begin step (5) here

// begin step (6) here

// begin step (7) here


// end step (4) with a closed curly brace