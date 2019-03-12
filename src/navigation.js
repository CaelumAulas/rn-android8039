import React from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'

// Telas: === 

const LoginScreen = (props) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Ir para home" onPress={() => {
        props.navigation.navigate('Home')
      }} />
    </View>
  )
}
LoginScreen.navigationOptions = {
  title: 'Página de Login',
  headerStyle: {
    backgroundColor: '#f4511e',
  }
};
const FeedScreen = () => (<View><Text>Home Screen</Text></View>)
const ProfileScreen = () => (<View><Text>Profile Screen</Text></View>)



class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const isUserAuthenticated = true
      this.props.navigation
        .navigate(isUserAuthenticated  ? 'AreaLogado' : 'AreaDeslogado' )
    }, 300)
  }
  render() {
      return (<View><Text>Instaelum</Text></View>)
  }
} // Navegação: =======
const DeslogadoStack = createStackNavigator({
  Login: { screen: LoginScreen },
}, { initialRouteName: 'Login' });
const LogadoTabNavigation = createBottomTabNavigator({
  Feed: { screen: FeedScreen, },
  Profile: { screen: ProfileScreen }
})
const AppNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  AreaLogado: LogadoTabNavigation,
  AreaDeslogado: DeslogadoStack
}, { initialRouteName: 'Splash' })
export default createAppContainer(AppNavigator)

// npm start
// react-native run-android