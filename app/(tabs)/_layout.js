import { Tabs } from "expo-router";
import { View } from "react-native-web";
import { HomeIcon, InfoIcon } from "../../component/Icons";


export default function TabsLayout() {
    return (
            <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {backgroundColor: 'black'},
                tabBarActiveTintColor: 'yellow',
                tabBarInactiveTintColor: 'white',
            }}
            >

                <Tabs.Screen 
                name="index" 
                oprtions={{
                title: 'Home',
                tabBarIcon: ({color}) => <HomeIcon color={color}/>,
            }}
            />
                <Tabs.Screen 
                name="about" 
                oprtions={{
                title: 'About',
                tabBarIcon: ({color}) => <InfoIcon color={color}/>,
            }}
            />
            </Tabs>
        
    );          
}
