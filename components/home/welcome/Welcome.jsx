import {useState} from 'react'
import { View, Text,Image,TouchableOpacity,FlatList,TextInput } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { COLORS, SIZES, FONTS, icons, images } from '../../../constants'

const Welcome = () => {
  const router = useRouter();
  return (
   
    <View>
     <View style={styles.container}>
      <Text style={styles.userName}>kya kya kya </Text>
      <Text style={styles.welcomeMessage}>welcome message  </Text>

      </View>
      <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>

      </View>
        </View>
    </View>
  )
}

export default Welcome