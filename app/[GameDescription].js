import { ActivityIndicator, ScrollView, Text, View, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Screen } from '../component/Screen'; 
import { Stack } from 'expo-router';
import { useState, useEffect } from 'react';
import { getLatestGames } from '../lib/metacritic';

export default function Detail() {
    const { GameDescription } = useLocalSearchParams();
    const [ gameInfo, setGameInfo ] = useState(null);

  
    useEffect(() => {
      if (GameDescription) {
          // Récupérer les détails complets du jeu
          getLatestGames().then((games) => {
              const selectedGame = games.find((game) => game.short_description === GameDescription);
              setGameInfo(selectedGame); // Stocker uniquement le jeu correspondant
          });
      }
  }, [GameDescription]);

  return (
    <Screen>
        <Stack.Screen 
            options={{
                headerStyle: { backgroundColor: '#ffee00' },
                headerTitle: gameInfo?.title || "Loading...",
                headerTitleAlign: 'center',
                headerTintColor: 'black',
                headerLeft: () => {},
                headerRight: () => {},
            }}
        />
        <View style={{ flex: 1, padding: 20, backgroundColor: '#000'}}>
            {gameInfo === null ? (
                <ActivityIndicator color={'red'} size={'large'} />
            ) : (
                <ScrollView>
                    <Image 
                        source={{ uri: gameInfo.thumbnail }} 
                        style={{ width: '100%', height: 200, borderRadius: 10, marginBottom: 20 }} 
                    />
                    
                      <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
                          {gameInfo.title}
                      </Text>
                      <Text style={{ color: 'lightgray', fontSize: 16, marginBottom: 10, textAlign: 'center'  }}>
                          {gameInfo.short_description}
                      </Text>
                      <Text style={{ color: 'orange', fontSize: 16, textAlign: 'center'  }}>
                          Release Date: {gameInfo.release_date}
                      </Text>
                </ScrollView>
            )}
        </View>
    </Screen>
);
}