import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import Home from './src/components/Home';
import Order from './src/components/Order';
import React from 'react';
import "././App.css"

import Product from './src/components/Product';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, Feather, MaterialIcons } from '@expo/vector-icons';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home' },
    { key: 'product', title: 'Product' },
    { key: 'order', title: 'Order' },
  ]);

  const renderScene = SceneMap({
    home: (props) => <Home {...props} />,
    order: (props) => <Order {...props} />,
    product: (props) => <Product {...props} />,
  });

  const getTabBarIcon = (props) => {
    const { route } = props
    if (route.key === 'home') {
      return <Entypo name="home" size={24} color="black" />
    } else if (route.key === 'order') {
      return <Feather name="shopping-cart" size={24} color="black" />
    } else {
      return <MaterialIcons name="favorite-outline" size={24} color="black" />
    }
  }
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Order" component={Order} />
        </Stack.Navigator>
       {/* <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          tabBarPosition='bottom'
          initialLayout={{ width: layout.width, height: "200px" }}
          swipeEnabled={false}
          style={styles.tabBarMain}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={styles.indicator}
              indicatorContainerStyle={{ backgroundColor: "#F8F7FB" }}
              activeColor='#000'
              renderIndicator={(props, title) => (
                <div style={{ backgroundColor: "#000" }}>{title}</div>
              )}
              renderIcon={props => getTabBarIcon(props)}
              tabStyle={styles.tabStyle}
              labelStyle={styles.noLabel}
              style={styles.tabBar}
            />
          )}
        />  */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBarMain: {},
  tabStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    margin: 8,
    height: 56,
  },
  noLabel: {
    color: '#8891A5',
  },
  tabBar: {
    backgroundColor: "#F8F7FB",
    elevation: 0,
  },
  indicator: {
    backgroundColor: '#000',
    height: 2,
    borderRadius: 4,
    top: '-22px'
  },
});
