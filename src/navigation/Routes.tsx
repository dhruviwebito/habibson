import React, { useEffect, useRef, useState } from 'react';
import { View, Platform, Pressable, Image, Linking, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Animated, {
    useSharedValue,
    withTiming,
    Easing,
    useAnimatedStyle,
    withDelay,
    useAnimatedGestureHandler,
    runOnJS,
    withSpring,
    interpolateColor,
} from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { State, TapGestureHandler } from 'react-native-gesture-handler';
import {navigationRef} from './routeNavigation';
import LoginScreen from 'screens/LoginScreen';
const RoutesStack = createStackNavigator();
const Tab = createBottomTabNavigator();



// const CustomTab = (props: any) => {
//     const doubleTapRef = useRef(null);
//     const { state, navigation, startAnimation } = props;
//     const dispatch = useDispatch();
//     const bottomTabAnimation = useSharedValue(1);
//     return (

//     )
// };

const Routes = () => {
    return (
      <NavigationContainer  ref={navigationRef}>
        <RoutesStack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {cardStyle: {opacity: progress}};
            },
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
          }}>
          {/* <RoutesStack.Screen name="SplashScreen" component={SplashScreen} /> */}
          <RoutesStack.Screen name="LoginScreen" component={LoginScreen} />
        
        </RoutesStack.Navigator>
      </NavigationContainer>
    );
  };
export default Routes;
