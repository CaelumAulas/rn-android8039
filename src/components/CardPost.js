import React, { Component } from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'

export default class CardPost extends Component {
    render() {

        const foto = this.props.foto

        return (
            <View style={ styles.container } >
                <View style={ styles.header }>
                    <Image
                        style={ styles.headerAvatar }
                        source={ { uri: foto.urlPerfil } } />
                    <Text style={ styles.headerTitle  } >@{ foto.loginUsuario }</Text>
                    {/* Reservado para o menu */}
                </View>
                <Image
                    style={ styles.cardPostImage }
                    source={ { uri: foto.urlFoto } } />

                <View style={ styles.footer }>
                    <Text>Descrição da fotinha</Text>
                </View>
            </View>
        )
    }
}

const larguraTotal = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: { marginBottom: 15 },
    header: { padding: 15, flexDirection: 'row', alignItems: 'center' },
    headerAvatar: { width: 50, height: 50, borderRadius: 50 },
    headerTitle: { marginLeft: 10 },
    cardPostImage: { width: larguraTotal, height: larguraTotal },
    footer: { padding: 15 }
})