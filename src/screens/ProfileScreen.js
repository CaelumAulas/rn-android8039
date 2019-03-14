import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import UsersService from '../services/UserService';

export default class ProfileScreen extends Component {
    state = {
        login: 'usuario', 
        publicacoes: [],
        avatar: 'https://placehold.it/500x500',
        isCarregando: true
    }

    logoutHandler = () => {
        this.props.navigation.navigate('Logout')
        // login
        // publicaçoes
        // avatar
    }


    async componentDidMount() {
        const userProfileInfo = await UsersService.getProfileInfo()
        this.setState({
            login: userProfileInfo.login,
            avatar: userProfileInfo.avatar || this.state.avatar,
            publicacoes: userProfileInfo.publicacoes,
            isCarregando: false
        })
    }

    render() {
        // placehold.it/larguraxaltura
        // /api/public/fotos/rafael
        return (
            <View>
                <View style={ styles.userInfoContainer }>
                    <Image 
                        style={ styles.userAvatar }
                        source={{ uri: this.state.avatar } }
                     />
                     <View>
                        <Text style={ styles.userLogin } >@{ this.state.login }</Text>
                        <Text style={ styles.userLogin }>Publicações {this.state.publicacoes.length}</Text>
                    </View>
                </View>
                <Button title="Logout" onPress={this.logoutHandler} />
                <View style={ styles.userGalleryContainer }>
                    {
                        this.state.isCarregando && <Text>Carregando...</Text>
                    }
                    {
                        this.state.publicacoes.map((foto) => (
                            <TouchableOpacity
                                key={foto.id}
                                onPress={ () => {
                                    this.props.navigation.navigate('PostDetail', {
                                        foto: foto,
                                    })
                                } }
                                >
                                <Transition shared={`fotoImage${foto.id}`}>
                                    <Image 
                                        style={ styles.userGalleryImage }
                                        source={{ uri: foto.urlFoto } }
                                        />
                                </Transition>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },  
    userLogin: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15
    },
    userAvatar: {
        width: 120,
        height: 120,
        borderRadius: 100
    },
    userGalleryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    userGalleryImage: {
        width: 120, // Usar a DimensionsAPI
        height: 120,
        margin: 1
    }
})