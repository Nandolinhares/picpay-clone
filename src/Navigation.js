import React from 'react';
//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
//Screens
import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScream from './screens/Pay';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: AntDesign,
        name: 'home' 
    },
    Wallet: {
        lib: AntDesign,
        name: 'creditcard'
    },
    Pay: {
        lib: AntDesign,
        name: 'home'
    },
    Notifications: {
        lib: Ionicons,
        name: 'ios-notifications-outline'
    },
    Settings: {
        lib: AntDesign,
        name: 'setting'
    }
}

function Navigation(){
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                },
            })}
        >
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
