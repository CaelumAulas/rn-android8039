import React from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import * as Animatable from 'react-native-animatable'
import LoginScreen from './screens/LoginScreen';
// Telas: === 




const FeedScreen = () => (<View><Text>Home Screen</Text></View>)
const ProfileScreen = () => (<View><Text>Profile Screen</Text></View>)



class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const isUserAuthenticated = false
      this.props.navigation
        .navigate(isUserAuthenticated  ? 'AreaLogado' : 'AreaDeslogado' )
    }, 1)
  }
  render() {
      return (
      <View style={ { 
          flex: 1,
          backgroundColor: 'purple',
          justifyContent: 'center',
          alignItems: 'center' }
        } >
          <Animatable.Text 
            style={ { color: 'white', fontSize: 40 } }
            animation="tada"
            direction="reverse"
            iterationCount="infinite"
            >
            Instaelum
          </Animatable.Text>
      </View>)
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