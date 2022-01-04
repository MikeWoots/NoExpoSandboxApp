import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Hello from './components/Hello';
import React from 'react';
import Goodbye from './components/Goodbye';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useFlipper } from '@react-navigation/devtools';

type RootStackParamList = {
  Hello: { name: string; baseEnthusiasmLevel: number };
  Goodbye: { name: string; baseEnthusiasmLevel: number };
};

export type HelloProps = NativeStackScreenProps<RootStackParamList, 'Hello'>;
export type GoodbyeProps = NativeStackScreenProps<
  RootStackParamList,
  'Goodbye'
>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function NavigationRouter() {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={'Hello'}>
        <RootStack.Screen
          name={'Hello'}
          component={Hello}
          initialParams={{
            name: 'Mike',
            baseEnthusiasmLevel: 0,
          }}
        />
        <RootStack.Screen name={'Goodbye'} component={Goodbye} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
