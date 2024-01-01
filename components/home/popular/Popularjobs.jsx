import React from 'react'
import {useState} from 'react'
import { View, Text,Image,TouchableOpacity,FlatList,TextInput, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import{COLORS,SIZES,FONTS,icons,images} from '../../../constants'
import PopularjobCard from '../../common/cards/popular/PopularJobCard'
import styles from './popularjobs.style'
import { isLoading } from 'expo-font'




const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
   const error = false;

  return (
    <View style ={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular Jobs</Text>
      <TouchableOpacity>
        <Text style={styles.headerBtn}>
          show all

        </Text>
        

      </TouchableOpacity>
      </View>
      <View style ={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>ummm...something went wrong </Text>
        ) : (
          <FlatList
          data={[1,2,3]}
          />
        )}

          

        

      </View>
      
     
      
    </View>
  )
}

export default Popularjobs