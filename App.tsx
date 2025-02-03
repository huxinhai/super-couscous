import type { RootStackParamList } from '@/types/type'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator as createStackNavigator } from '@react-navigation/native-stack'
import { Provider as MobxProvider } from 'mobx-react'
import type React from 'react'
import {
  StatusBar,
} from 'react-native'
import BootSplash from 'react-native-bootsplash'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PaperProvider, Provider } from 'react-native-paper'
import { enableFreeze, enableScreens } from 'react-native-screens'
import Toast from 'react-native-toast-message'
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Router from '@/router';

const stores = {

}

const Stack = createStackNavigator<RootStackParamList>()
enableFreeze(true)
enableScreens()

function App(): React.JSX.Element {

  return (
    <GestureHandlerRootView>
      {/*<SafeAreaView style={styles.container}>*/}
        <MobxProvider {...stores}>
          {/*<Provider>*/}
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent={!0}
          />
          {/*<XiaoshuProvider>*/}
          <PaperProvider>
            <Provider>
                  <NavigationContainer
                    onReady={() => BootSplash.hide({ fade: true })}
                  >
                    {/*<BottomTabNavigator/>*/}
                    <Stack.Navigator
                      screenOptions={
                        {
                          headerShown:!1,
                        }
                      }
                      initialRouteName={'Main'}
                    >
                      {
                        Router.map((item) =>
                          <Stack.Screen
                            key={item.name}
                            {...item}
                          />)
                      }
                    </Stack.Navigator>
                  </NavigationContainer>
              {/*</Provider>*/}
            </Provider>
          </PaperProvider>
        </MobxProvider>
        <Toast />
    </GestureHandlerRootView>
  )
}

export default App
