import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../component/Icons";
import { Screen } from "../component/Screen";

export default function About() {
    return (
        <Screen>
         <ScrollView>

         <Link asChild href='/'>
           <Pressable>
            {({ pressed }) =>  <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }}/>}
           </Pressable>
         </Link>

            <Text style={Style.Title1}>
                About Us!
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

            <Text style={Style.Title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum. 
            </Text>
         </ScrollView>
      </Screen>
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