import React from 'react';
import { View, Text } from 'react-native'
//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//Screens
import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScream from './screens/Pay';

const Tab = createBottomTabNavigator();

function Navigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
            />
            <Tab.Screen 
                name="Wallet" 
                component={WalletScreen} 
                options={{
                    title: 'Carteira'
                }}
            />
            <Tab.Screen 
                name="Pay" 
                component={PayScream} 
                options={{
                    title: 'Pagar'
                }}
            />
             <Tab.Screen 
                name="Notifications" 
                component={PayScream} 
                options={{
                    title: 'Notificações'
                }}
            />
             <Tab.Screen 
                name="Settings" 
                component={PayScream} 
                options={{
                    title: 'Configurações'
                }}
            />
        </Tab.Navigator>
    )
}

export default Navigation;
