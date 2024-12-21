import { ScrollView, ActivityIndicator, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { metacritic } from '../lib/metacritic';
import { GameCard } from './GameCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Main() {
  const [games, setGames] = useState([])
  const insets = useSafeAreaInsets();
  useEffect (() => {
    metacritic().then((games) => {
      setGames(games)
    })
  }, []);

  
  return (
<View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {games.length === 0 ? (
          <ActivityIndicator color={'red'} size={'large'}/>
      ) : (
     <FlatList // This only renders what we see, => better performance
        data={games}
        keyExtractor={game => game.id}  
        renderItem={({ item }) => <GameCard game={item} />} 
    />
      )}
</View>
  );
}
