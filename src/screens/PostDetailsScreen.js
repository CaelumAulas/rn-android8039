import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
export default class PostDetailsScreen extends Component {
    render() {
        const foto = this.props.navigation.getParam('foto', {})
        return (
            <ScrollView>
                <TouchableOpacity onPress={ () => {
                    this.props.navigation.goBack()
                } }>
                    <Text>Voltar</Text>
                </TouchableOpacity>
                <Transition shared={`fotoImage${foto.id}`}>
                    <Image 
                        style={ { flex: 1, height: 500 } }
                        source={{ uri: foto.urlFoto } }
                        />
                </Transition>
                <Transition appear='horizontal' disappear='bottom'>
                    <Text>
                        alo alo w brazil
                    </Text>
                </Transition>
            </ScrollView>
        )
    }
}


