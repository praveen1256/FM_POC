import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/worktask'
import { changeTheme } from '@/Store/Theme'


const TestContainer = ({navigation}) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  //const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    //useLazyFetchOneQuery()

  // useEffect(() => {
  //   fetchOne(userId)
  // }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    
      <View style={styles.scrollView}>
        <View style={styles.itemContainer}>
          <View style={styles.priority}>
            <Text style={styles.priorityText}>P1</Text>
          </View>
          <View style={styles.itemInfoContainer}>
            <View style={styles.icon}><Text>*</Text></View>
            <View style={styles.info}>
              <Text>123394155</Text>
               <Text>Store Biography</Text>
               <Text>100 KAMEHAHA VIE</Text>
               <Text>Pearl Highlander Center</Text>
               <Text>123456 Pearl City 123</Text>
               <Text>09/01/2022 15:00:15</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>P1</Text>
          </View>
          
        </View>
        
      </View>
    
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  priority: {
    textAlign:'right',
    flexDirection: 'row-reverse',
    
  },
  priorityText: {
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 10,
  },
  itemContainer: {
    padding: 5,
    flex: 1,
  },
  itemInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    
  },
  icon: {
    flex:1,
    textAlign: 'center',
  },
  info: {
    flex:5,
  },
  footer: {
    textAlign:'right',
    flexDirection: 'row-reverse',
    
  },
});
export default TestContainer
