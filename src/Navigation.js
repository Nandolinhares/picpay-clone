import React from 'react';
//Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons } from '@expo/vector-icons';
//Screens
import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScream from './screens/Pay';

//Components
import PayButton from './components/PayButton';

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
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if(route.name === 'Pay') {
                        return <PayButton onPress={() => navigation.navigate('Pay')} focused={focused} />
                    }
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255,255,255,0.2)'
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c'
            }}
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
                    title: ''
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
