import {Text, View} from 'react-native';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';

export default function Detail() {
    const { GameDescription } = useLocalSearchParams();
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text  style={{color: 'white', marginBottom: 20,}}> Detail Page {GameDescription}</Text>
            <Link href='/' style={{color: 'blue'}}>
            Go Back!
            </Link>

        </View>
    );
}