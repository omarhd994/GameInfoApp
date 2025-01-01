import {Text, View} from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';
import { Screen } from '../component/Screen'; 
import { Stack } from 'expo-router';

export default function Detail() {
    const { GameDescription } = useLocalSearchParams();
    return (
    <Screen>
      <Stack.Screen 
        options={{
           headerStyle: { backgroundColor: '#ffee00' },
           headerTintColor: 'black',
           headerLeft: () => {},
           headerTitle: 'The Legend of Zelda: Breath of the Wild',
           headerRight: () => {},
        }}
      />

        <View>
            <Text  style={{color: 'white', marginBottom: 20,}}> Detail Page {GameDescription}</Text>
            <Link href='/' style={{color: 'blue'}}>
            Go Back!
            </Link>
        </View>

    </Screen>
    );
}