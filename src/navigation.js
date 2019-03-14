import React from 'react'
import { View, Text, Button } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import * as Animatable from 'react-native-animatable'
import { FluidNavigator } from 'react-navigation-fluid-transitions'

import LoginScreen from './screens/LoginScreen';
import AuthScreen from './screens/AuthScreen';
import FeedScreen from './screens/FeedScreen';
import LogoutScreen from './screens/LogoutScreen';
import ProfileScreen from './screens/ProfileScreen';
import PostDetailsScreen from './screens/PostDetailsScreen';
// Telas: === 



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
}

// Navegação: =======

PostDetailsScreen

const DeslogadoStack = createStackNavigator({
  Login: { screen: LoginScreen },
}, { initialRouteName: 'Login' });

const LogadoTabNavigation = createBottomTabNavigator({
  Feed: { screen: FeedScreen, },
  Profile: FluidNavigator({
    ProfileHome: { screen: ProfileScreen },
    PostDetail: { screen: PostDetailsScreen },
  }),
}, { initialRouteName: 'Feed' })




const AppNavigator = createSwitchNavigator({
  AreaDeAutenticar: AuthScreen,
  AreaLogado: LogadoTabNavigation,
  AreaDeslogado: DeslogadoStack,
  Logout: LogoutScreen
}, { initialRouteName: 'AreaDeAutenticar' })

export default createAppContainer(AppNavigator)


// 1 - createAppContainer
// 2 - switchNavigator (rotas que você não quer um go back)
// 3 - Cada switch navigator pode ter um
//   - tabNavigation 
//     - stackNavigation
//   - drawerNavigation 
//     - stackNavigation
//   - stackNavigation

// npm start
// react-native run-android