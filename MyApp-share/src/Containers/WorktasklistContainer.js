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
import { useLazyFetchTwoQuery } from '@/Services/modules/worktask'
import { useLazyFetchDbQuery } from '@/Services/modules/worktaskDb'
import { changeTheme } from '@/Store/Theme'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faListCheck } from '@fortawesome/free-solid-svg-icons/faListCheck'
import {store} from '@/Store';
import { Config } from '../Config';
import { changeListPagePrevOffset, changeListPageNextOffset, resetListPageNextOffset } from '@/Store/Api'

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <View style={styles.itemContainer}>
          <View style={styles.priority}>
            <Text style={styles.priorityText}>{item['Priority']}</Text>
          </View>
          <View style={styles.itemInfoContainer}>
            <View style={styles.icon}><Text><FontAwesomeIcon  style={styles.iconText} size={ 32 } icon={ faGear } /></Text></View>
            <View style={styles.info}>
              <Text style={styles.itemTitle}>{item['Task ID']}</Text>
               <Text style={styles.itemAction}>{item['Requested For']}</Text>
                <Text style={styles.itemLocation}>{item['Status']}</Text>
               <Text style={styles.itemAddress}>{item['Task Location']}</Text>
               <Text style={styles.itemAddress}>{item['Request Class']}</Text>
               <Text style={styles.itemDate}>{item['Planned Start']}</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>{item['Request Class']}</Text>
          </View>
    </View>
    
  
  </TouchableOpacity>
);

const WorktasklistContainer = ({navigation}) => {

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: 'My Work Tasks', //Set Header Title
  //     headerStyle: {
  //       //backgroundColor: '#f4511e', //Set Header color
  //     },
  //     headerTintColor: '#000', //Set Header text color
  //     headerTitleStyle: {
  //       //fontWeight: 'bold', //Set Header text style
  //     },
  //     headerLeft: () => (
  //       <TouchableOpacity
  //         // onPress={() => alert('Left Menu Clicked')}
  //         style={{marginLeft: 10}}>
  //          <Text style={styles.pageBtnIconCon}><FontAwesomeIcon  style={styles.iconHeaderText} size={ 20 } icon={ faListCheck } /></Text>
  //       </TouchableOpacity>
  //     ),
  //     headerRight: () => (
  //       <TouchableOpacity
  //         onPress={() => alert('Right Menu Clicked')}
  //         style={{marginRight: 10}}>
  //         <Text style={{color: 'white'}}>Right Menu</Text>
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);

  
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const dispatch = useDispatch()

  prevRecord = ''
  
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
    {
        'Status': 'Active',
        'Task ID': 'SR-11111111',
        'Task Type': 'Corrective',
        'Requested For': 'DILLON UNRUH',
        'Task Location': '39 S MCCLINTOCK DR',
        'Assignment Status': 'Assigned',
        'Planned End': '1661534971804',
        'Priority': 'P1',
        'Responsible Person': 'RUBEN GRIJALVA',
        'Shop ID': 'W-08',
        'Planned Start': '1661448571804',
        'Request Class': 'CLEANING - CARPET',
        'System ID': '107952',
        'Primary Use': 'RETAIL',
        'Originator Type': 'Client',
        'Resolution Status': ''
    },
    {
        'Status': 'Active',
        'Task ID': 'SR-22222222',
        'Task Type': 'Corrective',
        'Requested For': 'GLENN ROSS',
        'Task Location': '2505 LAPORTE AVE',
        'Assignment Status': 'Assigned',
        'Planned End': '1661617485251',
        'Priority': 'P1',
        'Responsible Person': 'GLENN ROSS',
        'Shop ID': 'NC-03',
        'Planned Start': '1661531085251',
        'Request Class': 'EMERGENCY CLEAN UP',
        'System ID': '4108970',
        'Primary Use': 'RETAIL',
        'Originator Type': 'Facilities',
        'Resolution Status': 'Technician On Site'
    },
    {
        'Status': 'Active',
        'Task ID': 'SR-33333333',
        'Task Type': 'Corrective',
        'Requested For': 'SABARISH KUMARESAN',
        'Task Location': '23105 THREE NOTCH RD',
        'Assignment Status': 'Assigned',
        'Planned End': '1662229940688',
        'Priority': 'P1',
        'Responsible Person': 'BRIAN KETCHUM',
        'Shop ID': 'SE-01',
        'Planned Start': '1662143540688',
        'Request Class': 'KEYS (NON FURNITURE)',
        'System ID': '70160',
        'Primary Use': 'RETAIL',
        'Originator Type': 'Facilities',
        'Resolution Status': 'Technician On Site'
    },
    {
        'Status': 'Active',
        'Task ID': 'SR-10168045',
        'Task Type': 'Corrective',
        'Requested For': 'RAPID RESPONSE',
        'Task Location': '117 E 167TH ST',
        'Assignment Status': 'Assigned',
        'Planned End': '1661666129108',
        'Priority': 'P1',
        'Responsible Person': 'RHEAVA KIRVIN',
        'Shop ID': '',
        'Planned Start': '1661579729108',
        'Request Class': 'FIRE SYSTEM',
        'System ID': '31155',
        'Primary Use': 'CENTRAL OFC./COMM. DIAL OFC',
        'Originator Type': 'Vendor',
        'Resolution Status': ''
    },
    {
        'Status': 'Active',
        'Task ID': 'SR-44444444',
        'Task Type': 'Corrective',
        'Requested For': 'MARCIA BROWN',
        'Task Location': '4782 MILLENIA PLAZA WAY',
        'Assignment Status': 'Assigned',
        'Planned End': '1661521866816',
        'Priority': 'P1',
        'Responsible Person': 'MARCIA BROWN',
        'Shop ID': 'SE-03',
        'Planned Start': '1661435466816',
        'Request Class': 'HVAC ENERGY MGNT SYSTEMS',
        'System ID': '2117978',
        'Primary Use': 'RETAIL',
        'Originator Type': 'Facilities',
        'Resolution Status': ''
    },
    {
        'Status': 'Active',
        'Task ID': 'SR-55555555',
        'Task Type': 'Corrective',
        'Requested For': 'ASHLEY HILL',
        'Task Location': '8046 PROVIDENCE RD',
        'Assignment Status': 'Assigned',
        'Planned End': '1661620941656',
        'Priority': 'P1',
        'Responsible Person': 'BRIAN KETCHUM',
        'Shop ID': 'SE-04',
        'Planned Start': '1661534541656',
        'Request Class': 'WATER DIVERSION (HVAC)',
        'System ID': '102438',
        'Primary Use': 'RETAIL',
        'Originator Type': 'Client',
        'Resolution Status': 'Technician On Site'
    },
    {
        'Status': 'Active',
        'Task ID': 'SR-66666666',
        'Task Type': 'Corrective',
        'Requested For': 'HAREESH KILARI',
        'Task Location': '2501 W HAPPY VALLEY RD',
        'Assignment Status': 'Assigned',
        'Planned End': '1663086512465',
        'Priority': 'P1',
        'Responsible Person': 'RON QUOMSIEH',
        'Shop ID': 'W-08',
        'Planned Start': '1663000112465',
        'Request Class': 'CARD ACCESS',
        'System ID': '102132',
        'Primary Use': 'RETAIL',
        'Originator Type': 'Facilities',
        'Resolution Status': ''
    },
    {
        'Status': 'Active',
        'Task ID': 'SR-77777777',
        'Task Type': 'Corrective',
        'Requested For': 'HAREESH KILARI',
        'Task Location': '600-700 HIDDEN RIDGE',
        'Assignment Status': 'Assigned',
        'Planned End': '1663088770778',
        'Priority': 'P1',
        'Responsible Person': 'DANNEN REED',
        'Shop ID': '',
        'Planned Start': '1663002370778',
        'Request Class': 'CARD ACCESS',
        'System ID': '12026',
        'Primary Use': 'ADMINISTRATIVE',
        'Originator Type': 'Facilities',
        'Resolution Status': ''
    },
    {
        'Status': 'Active',
        'Task ID': 'SR-88888888',
        'Task Type': 'Corrective',
        'Requested For': 'KEVIN BROOKE',
        'Task Location': '75 MIDDLESEX TPKE',
        'Assignment Status': 'Assigned',
        'Planned End': '1661557266033',
        'Priority': 'P1',
        'Responsible Person': 'JOE RODRIGUEZ',
        'Shop ID': 'NE-05',
        'Planned Start': '1661470866033',
        'Request Class': 'WATER DIVERSION (HVAC)',
        'System ID': '70009',
        'Primary Use': 'RETAIL',
        'Originator Type': 'Facilities',
        'Resolution Status': ''
    }
];

  const getQuery = () => {
    //alert('aaa');
    // console.log('getQuery');
    const storeApi = store.getState();
    // console.log('storeApi', storeApi)
    // console.log('storeApi.apiEnv', storeApi.apiEnv.apiEnv);
    if(storeApi.apiEnv.apiEnv == Config.API_ENV_TRI)
      return useLazyFetchTwoQuery()
    else
      return useLazyFetchDbQuery()
  }

  

  const showPaginationButtons = () => {
    //alert('aaa');
    // console.log('getQuery');
    const storeApi = store.getState();
    let apiEnv = storeApi.apiEnv.apiEnv;
    if(storeApi.apiEnv.apiEnv == Config.API_ENV_DB)
      return true
    else
      return false
  }
  

  const getNextRecords = (data1) => {
    
    // console.log('data aa1111', data1)
    // console.log('data aaa', data)
    if(data.length > 0)
    {
      
      var item = data[data.length - 1];
      // console.log('item', item)
      // var firstItem = data[0];
      // console.log('item', item)
      offset = item['Task ID'];
      // console.log('before dispatch prevRecord', offset);
      dispatch(changeListPageNextOffset({ offset }))
      
      // alert(prevRecord);
      fetchDb(item['Task ID'])
    }
    
    
  }
  const getPrevRecords = () => {
    // console.log('data aa1111', data1)
    
    dispatch(changeListPagePrevOffset({  }))
    const storeApi = store.getState();
    // console.log('storeApi', storeApi)
    console.log('storeApi.apiEnv listPagePrevOffset', storeApi.apiEnv.listPagePrevOffset);
    var prevRecordArr = storeApi.apiEnv.listPagePrevOffset;
    
    var prevRecord = prevRecordArr[prevRecordArr.length-1]
    console.log('getPrevRecords prevRecord', prevRecord)
    // alert(prevRecord);
    // console.log('data aaa', data)
    if(data.length > 0)
    {
      // var item = data[0];
      // console.log('item', item)
      fetchDb(prevRecord)
      // var firstItem = data[0];
      // console.log('firstItem', firstItem)
      // offset = firstItem['Task ID'];
      // console.log('before dispatch prevRecord', offset);
      
    }
    
    
  }
  

  //const [userId, setUserId] = useState('10')
  // const [fetchOne, { data2 = [], isSuccess2, isLoading2, isFetching2, error2 }] =
  // useLazyFetchTwoQuery()
  const [fetchDb, { data, isSuccess, isLoading, isFetching, error }] = getQuery()


  

  useEffect(() => {
    //alert(isSuccess);
    fetchDb('NA')
    dispatch(resetListPageNextOffset({  }))
  }, [fetchDb])

  const onChangeTheme = ({ theme, darkMode }) => {
    dispatch(changeTheme({ theme, darkMode }))
  }
  const [selectedId, setSelectedId] = useState();
  const renderItem = ({item}) => {
   
    const backgroundColor = item.id === selectedId ? '#fff' : '#ccece';
    const color = item.id === selectedId ? 'black' : 'black';

    
    
    return (
      <Item 
        item={item}
        onPress={() => navigation.navigate('WorktaskDetail',{
          //params: { taskId: 'jane',otherParam: 'anything you want here' },
          taskId: item['Task ID'],
          otherParam: 'anything you want here',
        })}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
<View style={styles.container}>

      

    <View style={styles.loaderContainer}>
      {(isLoading || isFetching) && <ActivityIndicator size="large" style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }} color="#E85F5C"/>}
        
    </View>
   
    {isSuccess && !(isLoading || isFetching) && showPaginationButtons()  && 
      <View style={styles.paginationButtonCont}>
      <View style={styles.paginationButtonInner}>
      <Button
        onPress={() => getPrevRecords()}
        title="prev"
        color="#EE0100"
        style={styles.paginationButton}
      />
      </View>

      <View style={styles.paginationButtonInner}>
      <Button
        onPress={() => getNextRecords()}
        title="next"
        color="#EE0100"
        style={styles.paginationButton}
      />
      </View>
    </View>

    }
    
      {/* {alert(prevRecord)} */}
      {/* {prevRecord = data[]} */}
    
      {isSuccess && !(isLoading || isFetching) &&

        <FlatList
          // data={data1}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item['Task ID']}
          extraData={selectedId}
          // onEndReached = { () => getNextRecords(data) }
        />

      } 
  
  {/* <FlatList
          // data={data1}
          data={data1}
          renderItem={renderItem}
          keyExtractor={item => item['Task ID']}
          extraData={selectedId}
          onEndReached = { () => alert('hahaha') }
        
        /> */}


    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    color:'#000',
  },
  loaderContainer: {
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
    color:'#000',
  },
  title: {
    fontSize: 32,
  },
  itemText: {
    color: '#000',
  },
  itemTextTitle: {
    color: '#EE0100',
    fontSize: 10,
  },
  itemTextValue: {
    fontSize: 10,
  },
  priority: {
    flexDirection: 'row-reverse',
    
  },
  priorityText: {
    backgroundColor: '#EE0100',
    padding: 6,
    borderRadius: 30,
    color:'#fff',
    width: 30,
    height: 30,
    justifyContent: 'center',
    fontSize: 10,
    
  },
  item: {
    flex:1,
    margin: 10, 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#EE0100',
    borderBottomWidth: 3,
    marginBottom: 0,
  },
  itemContainer: {
    padding: 5,
    borderRadius: 10,
    borderColor: 'red',
  },
  itemInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    
  },
  icon: {
    flex:1,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  iconText: {
    color: '#EE0100',
  },
  iconHeaderText: {
    color: '#000',
  },
  info: {
    flex:5,
  },
  footer: {
    flexDirection: 'row-reverse',
    marginTop: 20,
  },
  itemTitle:{
    fontWeight:'bold',
    fontSize: 18,
    color:'#000',
  },
  itemAction:{
    color:'#000',
  },
  itemLocation:{
    fontSize: 15,
    fontWeight:'bold',
    color:'#000',
  },
  itemAddress:{
    color:'#000',
  },
  itemDate:{
    fontWeight:'bold',
    fontSize:16,
    color:'#000',
  },
  itemTitlea:{

  },
  paginationButtonCont: {
    // flex: 1,
    // width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationButtonInner: {
    // flex: 1,
    width: '40%',
    margin: 5,
  },
  paginationButton: {
    
  },
  
});


export default WorktasklistContainer
