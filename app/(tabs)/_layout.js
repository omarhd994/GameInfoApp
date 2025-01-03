import { Tabs } from "expo-router";
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
                options={{
                title: 'Home',
                tabBarIcon: ({color}) => <HomeIcon color={color}/>,
            }}
            />
                <Tabs.Screen 
                name="about" 
                options={{
                title: 'About',
                tabBarIcon: ({color}) => <InfoIcon color={color}/>,
            }}
            />
            </Tabs>
        
    );          
}
