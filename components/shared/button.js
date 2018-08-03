import {Button, StyleSheet} from 'react-native';
import React from 'react';

export default class ButtonT extends React.Component {

    constructor(props){
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(){
        alert("okkkk testing");
    }

    render(){
        return (
            <Button onPress={this.buttonClicked} title={this.props.title} color="#0892D0" />
        )
    }
}


const styles = StyleSheet.create({
    skyblue : {
        backgroundColor : '#87cefa'
    }
})