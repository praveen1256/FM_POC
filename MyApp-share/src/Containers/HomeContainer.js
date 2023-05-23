import React, { useState, useEffect } from 'react'
import {
  View,
  Button,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  Alert
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/worktask'
import { changeApiEnv } from '@/Store/Api'
import { changeTheme } from '@/Store/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation'
import { Config } from '@/Config'

const HomeContainer = ({navigation}) => {

  navigation.setOptions({
    tabBarStyle: { display: 'none' },
  });
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'verizon', //Set Header Title
      headerStyle: {
        backgroundColor: '#1A2225', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
        fontSize: 30,
      },
      headerLeft: () => (
        <TouchableOpacity
         
          style={{marginLeft: 10}}>
          <Text style={{color: 'white'}}></Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          // onPress={() => alert('Right Menu Clicked')}
          style={{marginRight: 10}}>
          <Text style={{color: 'white'}}><FontAwesomeIcon  style={styles.iconText} size={ 25 } icon={ faBars } /></Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const apiEnv = Config.API_ENV
  const apiEnvTri = Config.API_ENV_TRI
  const apiEnvDb = Config.API_ENV_DB
  // console.log('apiBaseUrl aaa', Config.API_URL_2);
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  //const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    //useLazyFetchOneQuery()

  // useEffect(() => {
  //   fetchOne(userId)
  // }, [fetchOne, userId])

  onSelectApiType = (apiEnv) => {
    console.log('onSelectApiType', apiEnv);
    // alert('hahah');
    dispatch(changeApiEnv({ apiEnv }))

    // dispatch(changeTheme({ apiBaseUrl }))
    navigation.navigate('Worktasklist')
    //dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        //Layout.fill,
      ]}
    >
    
      <View style={styles.header2}>
        <Text style={styles.header2Text1}>Facility</Text>
        <Text style={styles.header2Text2}>Management</Text>
        <Text style={styles.header2Text3}>Everywhere</Text>
      </View>

      <TouchableHighlight
        style = {styles.wtBtnContainer}
        underlayColor = '#ccc'
        // onPress = {() => alert('Worktasklist')}
        onPress = {() => this.onSelectApiType(apiEnvTri)}
      >
      <View style={styles.pageBtnContainer}>
        <Text style={styles.pageBtnIconCon}><FontAwesomeIcon  style={styles.iconText} size={ 20 } icon={ faListCheck } /></Text>
        <Text style={styles.pageBtnText}> Worktasks </Text>
      </View>
      
    </TouchableHighlight>

    <TouchableHighlight
        style = {styles.wtBtnContainer}
        underlayColor = '#ccc'
        // onPress = {() => alert('Worktasklist')}
        onPress = {() => this.onSelectApiType(apiEnvDb)}
      >
      <View style={styles.pageBtnContainer}>
        <Text style={styles.pageBtnIconCon}><FontAwesomeIcon  style={styles.iconText} size={ 20 } icon={ faListCheck } /></Text>
        <Text style={styles.pageBtnText}> Worktasks DB</Text>
      </View>
      
    </TouchableHighlight>
    
      
    <View style={styles.warningBoxContainer}>
      
      <View style={styles.warningBoxContainer1}>
        <Text style={styles.warningIcon}><FontAwesomeIcon  style={styles.iconText} size={ 25 } icon={ faTriangleExclamation } /></Text>
        <Text style={[styles.warningText, styles.warningTextAll]}>For all critical requests, please contact the GRE Customer Experience Team at </Text>
      </View>
      <View  style={styles.warningPhoneNo}>
        <Text  style={styles.warningPhoneNoText}>+1-(888) 696-3973</Text>
      </View>
      
      <Text style={[styles.warningTextAll]}>You will need to select the correct line of business from the IVR.</Text>
      <Text style={[styles.warningTextAll]}>For International Properties, if you need further assistence, please call your Local Facilities Contact.</Text>
    </View>

      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        
      

      </View>
      
    </ScrollView>
  )
}




const styles = StyleSheet.create({
  
  icon: {
    flex:1,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  iconText: {
    color: '#96191C',
  },
  header2: {
    backgroundColor: '#1A2225',
    color: '#fff',
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  header2Text1: {
    color: '#96191C',
    fontWeight: 'bold',
    fontSize: 20,
  },
  header2Text2: {
    color: '#96191C',
    fontSize: 20,
    marginTop: 3,
  },
  header2Text3: {
    color: '#fff',
    backgroundColor: '#96191C',
    alignSelf: 'flex-start',
    paddingLeft:45,
    paddingRight:10,
    marginTop: 3,

  },
  wtBtnContainer: {
    backgroundColor:'#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
    margin:20,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,

  },
  pageBtnContainer: {
    //flex: 1,
    flexDirection: 'row',
  },
  pageBtnText: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 10, 
  },
  pageBtnIconCon: {

  },
  warningBoxContainer: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 15, 
    justifyContent: 'center',
    
  },
  warningBoxContainer1: {
    flexDirection: 'row',
    padding: 10,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    marginLeft: 10,
  },
  warningPhoneNo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  warningPhoneNoText: {
    fontWeight: 'bold',
    color: 'orange',
    fontSize: 16,
  },
  warningTextAll: {
    fontSize: 16,
    color: '#000',
  }
});

export default HomeContainer
