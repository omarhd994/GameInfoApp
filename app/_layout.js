import { Slot } from "expo-router";
import { View } from "react-native";


export default function Layout() {

  return(
    <View style={Style.Container}>
      <Slot/>
    </View>
  )
};


const Style = {
  Container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
}