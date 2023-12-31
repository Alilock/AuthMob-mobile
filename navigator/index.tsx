import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from '../screens/Login'
import RegisterScreen from '../screens/Register'
import TwoFactorAuthView from '../screens/Confirm'
import ProfileScreen from '../screens/Profile'
const Stack = createNativeStackNavigator()

const index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='register' component={RegisterScreen} />
                <Stack.Screen name='login' component={LoginScreen} />
                <Stack.Screen name='confirm' component={TwoFactorAuthView} />
                <Stack.Screen name='profile' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index

const styles = StyleSheet.create({})