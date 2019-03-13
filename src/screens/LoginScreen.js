import React from 'react'
import { View, Text, Button, TextInput, StyleSheet, AsyncStorage } from 'react-native'

class LoginScreen extends React.Component{
    state = {
        login: 'rafael',
        senha: '12345677',
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
                AsyncStorage.setItem('CW_TOKEN', token)
                this.props.navigation.navigate('AreaLogado')
            })
            .catch((err) => {
                console.warn(err.message)
            })
    }

    render (props) {
        return (
            <View style={ styles.container }>

                <Text style={ styles.title }>Instaelum</Text>
                <TextInput
                    style={styles.formField}
                    placeholder="Login"
                    value={this.state.login}
                    onChangeText={ login => this.setState({ login }) }
                />
                {/* Erro do login nao preenchido */}
                <TextInput
                    style={styles.formField}
                    placeholder="Senha"
                    value={this.state.senha}
                    secureTextEntry={true}
                    onChangeText={ senha => this.setState({ senha }) }
                />
                {/* Erro da senha não preenchida */}
                {/* Erro genérico do form */}
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
    }
})
export default LoginScreen