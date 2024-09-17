/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen({navigation, route}) {
  console.log(route.params);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Account"
        onPress={() => navigation.navigate('Account')}
      />
      <Text>Home!</Text>
    </View>
  );
}

function AccountScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate('Home', {
            test: 'test',
          })
        }
      />
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}
