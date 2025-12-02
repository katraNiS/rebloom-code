import { View, Text, StyleSheet } from 'react-native'
const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rebloom Test App</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
})