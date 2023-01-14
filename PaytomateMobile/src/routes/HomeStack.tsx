import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer} from "react-navigation"
import {View, Text} from "react-native"
import * as React from "react"
import Home from "../screens/Home"
import Profile from "../screens/Profile"

const screens  =  {
    Home: {
        screen: Home
    },
    Profile:{
        screen: Profile
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack) 