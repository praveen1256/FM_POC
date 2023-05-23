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
  FlatList,
  StyleSheet,
  StatusBar,
  Alert
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/worktaskDetails'
import { useLazyFetchFourQuery } from '@/Services/modules/worktaskDetailsDb'
import { changeTheme } from '@/Store/Theme'
import {store} from '@/Store';
import { Config } from '../Config';

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text >worktask id: {item['Task ID']}</Text>
    <Text >Requested For : {item['Requested For']}</Text>
    <Text >Status : {item['Status ']}</Text>
    <Text >Task Location : {item['Task Location']}</Text>
  </TouchableOpacity>
);

const WorktaskDetailContainer = ({route, navigation}) => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const { taskId, otherParam } = route.params;
  //alert('taskId', otherParam);

  const getQuery = () => {
    //alert('aaa');
    console.log('getQuery');
    const storeApi = store.getState();
    console.log('storeApi', storeApi)
    console.log('storeApi.apiEnv', storeApi.apiEnv.apiEnv);
    if(storeApi.apiEnv.apiEnv == Config.API_ENV_TRI)
      return useLazyFetchOneQuery()
    else
      return useLazyFetchFourQuery()
  }


  const [userId, setUserId] = useState(taskId)
  const [fetchDb, { data = [], isSuccess, isLoading, isFetching, error }] =
  getQuery()



  useEffect(() => {
    fetchDb(userId)
  }, [fetchDb, userId])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  const data1 = [
    {
        'Status': 'Active',
        'Task ID': 'SR-00000000',
        'Task Type': 'Corrective',
        'Requested For': 'HAREESH KILARI',
        'Task Location': '2501 W HAPPY VALLEY RD',
        'Assignment Status': 'Unassigned',
        'Planned End': '1663088563212',
        'Priority': 'P1',
        'Responsible Person': 'RON QUOMSIEH',
        'Shop ID': 'W-08',
        'Planned Start': '1663002163212',
        'Request Class': 'CARD ACCESS',
        'System ID': '102132',
        'Primary Use': 'RETAIL',
        'Originator Type': 'Facilities',
        'Resolution Status': ''
    },
  ];
 

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={styles.mainContainer}>

      
     
    {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    

      
      <View style={styles.loaderContainer}>
        {(isLoading || isFetching) && <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} color="#E85F5C"/>}
          
      </View>

    
    
    {isSuccess} 
          {data.map((item,i) => {
           
            return(
           
              
              
            <View  style={styles.detailContainer}
              key={i} 
              //onPress={() => alert('hahah')}
            >
              <Text style={styles.title}>{item['Task ID']} - {item['Status']} - {item['Request Class']} - {item['Priority']}</Text>
              <View>
                <Text style={styles.sectionTitle}>General</Text>
              </View>

              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Worktask id </Text><Text style={[styles.itemTextValue]}>{item['Task ID']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Requested For  </Text><Text style={[styles.itemTextValue]}>{item['Requested For']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Status </Text><Text style={[styles.itemTextValue]}>{item['Status']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Task Location </Text><Text style={[styles.itemTextValue]}>{item['Task Location']}</Text>
              </Text>

              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Task Type </Text><Text style={[styles.itemTextValue]}>{item['Task Type']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Assignment Status </Text><Text style={[styles.itemTextValue]}>{item['Assignment Status']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Planned Start </Text><Text style={[styles.itemTextValue]}>{item['Planned Start']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Planned End </Text><Text style={[styles.itemTextValue]}>{item['Planned End']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Priority </Text><Text style={[styles.itemTextValue]}>{item['Priority']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Responsible Person </Text><Text style={[styles.itemTextValue]}>{item['Responsible Person']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Request Class </Text><Text style={[styles.itemTextValue]}>{item['Request Class']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>System ID </Text><Text style={[styles.itemTextValue]}>{item['System ID']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Primary Use </Text><Text style={[styles.itemTextValue]}>{item['Primary Use']}</Text>
              </Text>
              <Text style={[styles.itemText]}>
                <Text style={[styles.itemTextTitle]}>Originator Type </Text><Text style={[styles.itemTextValue]}>{item['Originator Type']}</Text>
              </Text>
              
            </View>
            
            
               )}
      )}

    </ScrollView>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    // height: 100,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  loaderContainer: {
    // borderWidth: 1,
    height: '100%',
    flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    // justifyContent: 'space-around',
    zIndex: 100,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    marginTop: 20,
  },
  detailContainer: {
    padding: 20,
    marginTop: 10,
  },
  itemText: {
    color: '#000',
  },
  itemTextTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
  itemTextValue: {
    fontSize: 14,
    color: '#000',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  sectionTitle: {
    color: '#EE0100',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 15,
  },
  itemText: {
    marginTop: 15,
  },
  
});


export default WorktaskDetailContainer
