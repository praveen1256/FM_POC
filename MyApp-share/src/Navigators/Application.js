import React from 'react'
import { SafeAreaView, StatusBar, View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StartupContainer, ExampleContainer, WorktasklistContainer, WorktaskDetailContainer, TestContainer , HomeContainer} from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { getHeaderTitle } from '@react-navigation/elements';

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator 
            //screenOptions={{ headerShown: false }}
            //headerMode="Screen">
            headerMode="screen" screenOptions={{ 
              headerShown: true,
              // header: ({ navigation, route, options, back }) => {
              //   const title = getHeaderTitle(options, route.name);
              
              //   return (
              //     <View
              //       title='aaa'
              //       leftButton={
              //         <Text onPress={navigation.goBack}>aaa</Text> 
              //       }
              //       style={options.headerStyle}
              //     >
              //     <Text onPress={navigation.goBack}>bbb</Text> 
              //     </View>
              //   );
              // }
            }}
          >
          <Stack.Screen options={{headerShown: false}}  name="Startup" component={StartupContainer} />
          <Stack.Screen
            name="Main"
            title="afdfds"
            component={MainNavigator}
            options={{
              animationEnabled: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="Example" component={ExampleContainer} />
          <Stack.Screen name="Home" component={HomeContainer} />
          <Stack.Screen name="Worktasklist" component={WorktasklistContainer} />
          <Stack.Screen name="WorktaskDetail" component={WorktaskDetailContainer} />
          <Stack.Screen name="Test" component={TestContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
