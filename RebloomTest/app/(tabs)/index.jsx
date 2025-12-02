import { View, Text, StyleSheet, ImageBackground } from 'react-native'

import rebloomdemo from '@/assets/images/rebloomdemo.png'
import backgroundrebloom from '@/assets/images/backgroundrebloom.png'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={backgroundrebloom}
      resizeMode='cover'
      style={styles.image}>
      <Text style={styles.text}>Rebloom</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: 'rgba(0, 0, 0, 0.9)',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})