import React, { Component } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'
import FotosService from '../services/FotosService';

// Container Component
export default class CardPost extends Component {
    // Salvar o state inicial
    constructor(props) {
        super()

        this.state = {
            foto: props.foto
        }
    }

    like = () => {
        let likersAtualizado = [
            ...this.state.foto.likers
        ]

        if(!this.state.foto.likeada) {
            likersAtualizado.push({ login: 'rafael' }) 
        } else {
            likersAtualizado = likersAtualizado.filter((liker) => {
                return liker.login !== 'rafael'
            })
        }

        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada,
            likers: likersAtualizado
        }
        this.setState({
            foto: fotoAtualizada
        })

        FotosService.like(this.state.foto.id)

    }

    render() {

        const foto = this.state.foto
        // ## Desafio: Chavear os corações de acordo com o likeada

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
                    <LikeButton onPress={this.like} likeActive={foto.likeada} />
                    <Text style={ styles.fontBold } >
                    { foto.likers.length } likes,
                    Curtido por: {  foto.likers.length && foto.likers[0].login} 
                    </Text>

                    <Text>Descrição da fotinha</Text>
                </View>
            </View>
        )
    }
}


// Presentational Component
class LikeButton extends Component {
    render() {
        const props = this.props
        return (
            <TouchableOpacity
            onPress={ () => {
                    // https://github.com/oblador/react-native-animatable
                    // https://daneden.github.io/animate.css/
                    this.btnImage.bounceIn(800)
                    props.onPress()
                } } >
                <Animatable.Image
                    ref={(referenciaParaAImagem) => {
                        this.btnImage = referenciaParaAImagem
                    }}
                    source={
                        props.likeActive
                        ? require('../assets/s2-checked.png')
                        : require('../assets/s2.png')
                    }
                    style={ styles.likeButton }
                />
            </TouchableOpacity>
        )
    }
}

const larguraTotal = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: { marginBottom: 15 },
    header: { padding: 15, flexDirection: 'row', alignItems: 'center' },
    headerAvatar: { width: 50, height: 50, borderRadius: 50 },
    likeButton: { width: 50, height: 50 },
    likeButtonGrande: { width: 80, height: 80 },
    headerTitle: { marginLeft: 10 },
    cardPostImage: { width: larguraTotal, height: larguraTotal },
    footer: { padding: 15 },
    fontSize: { fontSize: 16 },
    fontBold: { fontWeight: 'bold', fontSize: 16 }
})