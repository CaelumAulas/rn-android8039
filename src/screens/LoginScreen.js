import React from 'react'
import { View, Text, Button, TextInput, StyleSheet, AsyncStorage } from 'react-native'

class LoginScreen extends React.Component{
    state = {
        login: 'rafael',
        senha: '123456',
        erroGenerico: '',
        touchedFields: {
            login: false,
            senha: false,
        }
    }

    componentDidMount() {
    }

    logar = () => {
        const url = 'https://instalura-api.herokuapp.com/api/public/login'
        const dadosDoLogin = {
            "login": this.state.login,
            "senha": this.state.senha
        }
        const configs = {
            method: 'POST', body: JSON.stringify(dadosDoLogin),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch(url, configs)
            .then((respostaDoServer) => {
                if(respostaDoServer.ok) return respostaDoServer.text()
                throw new Error('Não foi possível fazer o login :(')
            })
            .then((token) => {
                if(token) {
                    AsyncStorage.setItem('CW_TOKEN', token)
                        .then(() => {
                            this.props.navigation.navigate('AreaDeAutenticar')
                        })
                } else {
                    throw new Error('Ocorreu um erro no servidor ao tentar fazer os eu login, entre em contato via sei la')
                }
            })
            .catch((err) => {
                this.setState({
                    erroGenerico: err.message
                })
            })


            this.setState({
                touchedFields: {
                    login: true,
                    senha: true,
                }
            })
    
    }

    render () {
        return (
            <View style={ styles.container }>

                <Text style={ styles.title }>Instaelum</Text>
                <TextInput
                    style={styles.formField}
                    placeholder="Login"
                    value={this.state.login}
                    onChangeText={ login => this.setState({ login }) }
                    onBlur={ () => this.setState(
                        { touchedFields: {...this.state.touchedFields, login: true} }
                    ) }
                />
                {
                    this.state.login.length === 0 && this.state.touchedFields.login
                    ? <Text style={ styles.errorLabel } >Preencha o login ai manolo!</Text>
                    : null
                }

                <TextInput
                    style={styles.formField}
                    placeholder="Senha"
                    value={this.state.senha}
                    secureTextEntry={true}
                    onChangeText={ senha => this.setState({ senha }) }
                    onBlur={ () => this.setState(
                        { touchedFields: {...this.state.touchedFields, senha: true} }
                    ) }
                />
                {
                    this.state.senha.length === 0 && this.state.touchedFields.senha
                    ? <Text style={ styles.errorLabel } >Preencha a senha ai manolo!</Text>
                    : null
                }
                
                
                <Text style={ styles.errorLabel } >
                    { this.state.erroGenerico }
                </Text>

                <Button
                    style={styles.formBtn}
                    title="Login"
                    onPress={ this.logar } />
            </View>
        )
    }
}

LoginScreen.navigationOptions = {
    title: 'Página de Login',
    headerStyle: {
        // backgroundColor: '#f4511e',
    }
};


//react-native-styling-cheat-sheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 50,
        color: 'black',
    },
    formField: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        alignSelf: 'stretch',
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 15,
    },
    formBtn: {
        width: 400,
        backgroundColor: 'red'
    },
    errorLabel: {color: 'red', fontSize: 14 }
})
export default LoginScreen