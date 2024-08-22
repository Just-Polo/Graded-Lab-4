import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { Data } from "./Components/ParentContext";
import DetailsForm from "./Components/UserDetails";
import AddressForm from "./Components/AddressDetails";
import PaymentForm from "./Components/CardDetails";
import MenuPage from "./Components/Menu";
import CartPage from "./Components/Cart";
import ProfilePage from "./Components/Profile";

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const FormNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="User Details" component={DetailsForm} />
    <Stack.Screen name="Address Details" component={AddressForm} />
    <Stack.Screen name="Payment Details" component={PaymentForm} />
  </Stack.Navigator>
)

export default function App() {
  return (
    <Data.Provider>
      <NavigationContainer>
        <Tabs.Navigator initialRouteName="UserDetails">
          <Tabs.Screen name="Menu" component={MenuPage} />
          <Tabs.Screen name="Cart" component={CartPage} />
          <Tabs.Screen name="Profile" component={ProfilePage} />
          <Tabs.Screen name="Registration Forms" component={DetailsForm} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Data.Provider>
  );
};