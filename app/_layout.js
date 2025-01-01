import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";
import { Logo } from "../component/Logo";
import { CircleInfoIcon } from "../component/Icons";


export default function Layout() {

  return(
    <View style={Style.Container}>
      <Stack
        screenOptions={{
        headerStyle: { backgroundColor: 'black' },
        headerTintColor:'yellow',
        headerTitle: '',
        headerLeft: () => <Logo />,
        headerRight: () => (
          <Link asChild href="/about">
            <Pressable>
              <CircleInfoIcon />
            </Pressable>
          </Link>
        )
        }}
      />
    </View>
  )
};





const Style = {
  Container: {
    flex: 1,
  },
  Title: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
}