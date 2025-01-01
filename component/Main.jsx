import { ActivityIndicator, View, FlatList, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { getLatestGames } from '../lib/metacritic';
import { AnimatedGameCard } from './GameCard';
import { Screen } from './Screen';


export function Main() {
  const [games, setGames] = useState([])
  useEffect (() => {
    getLatestGames().then((games) => {
      setGames(games)
    })
  }, []);


  
  return (
<Screen>
      {games.length === 0 ? (
          <ActivityIndicator color={'red'} size={'large'}/>
      ) : (
     <FlatList // This only renders what we see, => better performance
        data={games}
        keyExtractor={game => game.id}  
        renderItem={({ item, index }) => 
        <AnimatedGameCard game={item} index={index} />} 
      />
      )}
</Screen>
  );
}
