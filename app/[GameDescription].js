import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Screen } from '../component/Screen'; 
import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { getLatestGames } from '../lib/metacritic';

export default function Detail() {
    const { GameDescription } = useLocalSearchParams();
    const [ gameInfo, setGameInfo ] = useState("");

  
      useEffect(() => {
        if (GameDescription) 
          setGameInfo(GameDescription);
        
      }, [GameDescription]);

    return (
      <Screen>
        <Stack.Screen 
          options={{
             headerStyle: { backgroundColor: '#ffee00' },
             headerTintColor: 'black',
             headerLeft: () => {},
             headerTitle: "Zelda",
             headerRight: () => {},
          }}
        />
          <View>
            {GameDescription === null ? (<ActivityIndicator color={'red'} size={'large'}/>) 
            : ( 
          <ScrollView>
            <View>
              <Text  style={{ flex: 1, color: 'white', marginBottom: 20, alignContent: 'center', justifyContent: 'center'}}> 
                Detail Page {gameInfo}</Text>
            </View>
          </ScrollView>
              )}
         </View>
  
      </Screen>
      );
  }