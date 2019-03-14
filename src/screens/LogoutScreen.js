import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'

export default class LogoutScreen extends Component {
    async componentDidMount() {
        await AsyncStorage.setItem('CW_TOKEN', '')

        this.props.navigation.navigate('AreaDeAutenticar')
    }

    render() {
        return (
            <View>
                <Text>Tchau tchau!</Text>
            </View>
        )
    }
}