import { View, Text } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { Store } from './Src/Store/Store/Store';
import AuthStack from './Src/Navigation/AuthStack'
//import BuyerStack from './Src/Navigation/BuyerStack/BuyerStack';

const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <AuthStack/>
      {/* <BuyerStack/> */}
    </NavigationContainer>
    </Provider>
  )
}

export default App