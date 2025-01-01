import { View } from "react-native";

export function Screen ({children}) {
    return (
    <View style={{ flex: 1, backgroundColor: 'black', paddingTop: 10, paddingHorizontal: 2,}}>{children}</View>
    )
}

