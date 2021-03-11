import * as React from "react";
// import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./app/screens/Home";
import MyTabs from "./app/screens/MyTabs";
import Settings from "./app/screens/Settings";
import WelcomeScreeen from "./app/screens/WelcomePage";
import Ionicons from "react-native-vector-icons/Ionicons";
// import styles from "./app/constants/styles";

import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer, { INITIAL_STATE } from "./app/state/reducers";

const store = createStore(rootReducer, INITIAL_STATE);

export enum Tabs {
  Home = "Home",
  Settings = "Settings",
  MyTabs = "My Tabs",
}

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return loggedIn ? (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === Tabs.Home) {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === Tabs.MyTabs) {
                iconName = focused ? "ios-layers" : "ios-layers-outline";
              } else if (route.name === Tabs.Settings) {
                iconName = focused ? "ios-settings" : "ios-settings-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#9e2a2b",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name={Tabs.Home} component={Home} />
          <Tab.Screen name={Tabs.MyTabs} component={MyTabs} />
          <Tab.Screen name={Tabs.Settings} component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  ) : (
    <WelcomeScreeen setLoggedIn={setLoggedIn} />
  );
};

export default App;
