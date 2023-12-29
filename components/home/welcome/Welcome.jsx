import {useState} from 'react'
import { View, Text,Image,TouchableOpacity,FlatList,TextInput } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { COLORS, SIZES, FONTS, icons, images } from '../../../constants'
const jobtypes = [ "fulltime", "parttime", "remote", "contract", "temporary", "internship", "commission", "volunteer", "apprenticeship", "fresher", "walkin", "others"]
const Welcome = () => {
  const router = useRouter();
  const  [activejobtypes , setActivejobtypes] = useState('fulltime')

  return (
   
    <View>
     <View style={styles.container}>
      <Text style={styles.userName}>Hello User  </Text>
      <Text style={styles.welcomeMessage}>Find your dream job now </Text>

      </View>
      <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput 
        
        value=""
        onChange={()=>{}}
        style={styles.searchInput}
        placeholder="search job title/ skills/ company"
        />
        </ View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image source={icons.search} 
          style={styles.searchBtnImage}
          resizeMode='contain'
           />
        </TouchableOpacity>

        </View>
        <View  style= {styles.tabsContainer }>
          <FlatList
          data={jobtypes}
          renderItem={({item}) => (
            <TouchableOpacity
            style ={styles.tab(activejobtypes,item)}>
              <Text>
                {item}

              </Text>
            </TouchableOpacity>
          )}
          />


          </View>
    </View>
  );
}

export default Welcome