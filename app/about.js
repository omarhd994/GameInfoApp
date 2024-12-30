import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../component/Icons";

export default function About() {
    return (
         <ScrollView>

         <Link asChild href='/'>
           <Pressable>
             <HomeIcon />
           </Pressable>
         </Link>

            <Text style={Style.Title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </Text>

            <Text style={Style.Title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </Text>

            <Text style={Style.Title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </Text>

            <Text style={Style.Title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </Text>

            <Text style={Style.Title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </Text>
         </ScrollView>
    );
}


const Style = {
    Title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 5
    },
    Title1: {
        color: 'yellow',
        fontSize: 28,
        textAlign: 'center',
        padding: 0,
        fontWeight: 'bold',
    }
}