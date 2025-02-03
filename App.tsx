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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const stores = {

}

const Stack = createStackNavigator<RootStackParamList>()
enableFreeze(true)
enableScreens()

const Tab = createBottomTabNavigator()

import Pay from "@/pages/Pay.tsx";

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#f39555',
                tabBarInactiveTintColor: 'gray',
                animation:'fade'
            }}
        >
            <Tab.Screen
                name={'Home'}
                component={Pay}
                options={{
                    tabBarLabel: 'home'
                }}
            />

        </Tab.Navigator>
    )
}



function App(): React.JSX.Element {

    return (
        <GestureHandlerRootView>
            <MobxProvider {...stores}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                    translucent={!0}
                />
                <PaperProvider>
                    <Provider>
                        <NavigationContainer
                            onReady={() => BootSplash.hide({ fade: true })}
                        >
                            <Stack.Navigator
                                // Main appear [RCTView setSheetLargestUndimmedDetent:]
                                // pay appaer [RCTView setColor:]
                                initialRouteName={'Main'}
                                screenOptions={
                                    {
                                        headerShown:!1,
                                    }
                                }
                            >
                                <Stack.Screen
                                    name="Main"
                                    component={BottomTabNavigator}
                                    options={{ headerShown: !1 }}
                                />
                                {
                                    Router.map((item) =>
                                        <Stack.Screen
                                            key={item.name}
                                            {...item}
                                        />)
                                }
                            </Stack.Navigator>
                        </NavigationContainer>
                    </Provider>
                </PaperProvider>
            </MobxProvider>
            <Toast />
        </GestureHandlerRootView>
    )
}

export default App
