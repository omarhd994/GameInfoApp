import { View, Text, Image, StyleSheet } from "react-native"
export const GameCard = ({ game }) => {
  return (
        <View key={game.id} style={styles.card}>
          <Image source={{ uri: game.thumbnail }} style={styles.image}/>
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.description}>{game.short_description}</Text>
          <Text style={styles.platform}>{game.platform}</Text>
          <Text style={styles.releasedate}>{game.release_date}</Text>
        </View>  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fontColor: {
      color: '#fff'
    },
    card: {
      margin: 5,
      padding: 5,
      alignSelf: 'flex-start',
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    title: {
      color: 'green',
      fontSize: 24,
    },
    description: {
      color: 'white',
      fontSize: 18,
    },
    platform: {
      color: 'grey',
    },
    releasedate: {
      color: 'orange',
    }
  });