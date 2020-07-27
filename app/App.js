/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,


} from 'react-native';



export default  App = () => {

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <SafeAreaView>



      <View style={styles.mealContainer}>
        <View style={styles.mealTitle}>
          <Text style={styles.mealTitleText}>Petit déjeuner</Text>
          <TouchableOpacity

            onPress={onPress}
          >
            <View>
              <Text style={styles.mealTitlePlusButton}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.countContainer}>
          <Text>Count: {count}</Text>
        </View>
      </View>




    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mealContainer : {
    alignContent : 'center',
  },
  mealTitle : {
    flexDirection: 'row',
    backgroundColor : '#3A8E3A',
    paddingVertical : 6,
    paddingHorizontal: 12,
    width: '100%',
    maxWidth : '90%',
    justifyContent : 'space-between',
    alignItems : 'center',
    borderRadius: 20,
    alignSelf: 'center'
  },
  mealTitleText : {
    color:'#EFEFEF',
    fontSize: 26,
  },
  mealTitlePlusButton : {
    color:'#EFEFEF',
    fontSize: 36,
    backgroundColor: '#85C685',
    borderRadius : 20,
    paddingHorizontal: 16
  },


});
