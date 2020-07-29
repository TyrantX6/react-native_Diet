import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image

} from 'react-native'

import {useNavigation} from "@react-navigation/core";



export default FoodListItem = food => {

  const navigation = useNavigation();


  let image;
  if (food.photo == 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png' ) {
    image = <Text></Text>
  } else {
    image = <Image
      style={styles.thumbnail}
      source={{
        uri: food.photo
      }}
    />
  };

  let branded;
  if (food.branded != undefined) {
    branded = styles.listItemContainerBranded
  } else {
    branded = styles.listItemContainer
  }

  //console.log de tests :
  //console.log('food list item:', props);
  //console.log('branded:', props.branded);


  /*const addFood= async () => {

    let newFoodState = [...foodList,
      {
        id: props.foodTitle,
        title: props.foodTitle,
        photo: props.photo,
        branded: props.branded
      }];


    //Update Component State
    setFoodList(newFoodState);


  }

  console.log('food title item:', food.foodTitle);
*/

  return (


        <View style={branded}>
          <Text style={styles.listItemName}>
            {food.foodTitle}
          </Text>
          <View style={styles.rightContainer}>
            {image}
            <TouchableOpacity
              onPress={() => navigation.navigate('TodayScreen', {
                foodTitle: food.foodTitle,
                photo: food.photo,
                id : food.id,
                branded : food.branded,
                meal : food.meal
              })}
            >
              <View>
                <Text style={styles.listItemAddButton}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>



  );
};

const styles = StyleSheet.create({

  listItemContainer : {
    flexDirection : 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical:15,
    backgroundColor : '#ededed',
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1,
    alignItems : 'center',
    paddingHorizontal: 12,
    borderRadius : 12,
  },
    listItemContainerBranded: {
    flexDirection : 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    paddingVertical:15,
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1,
    alignItems : 'center',
    backgroundColor : '#DBDBDB',
    paddingHorizontal: 12,
    borderRadius : 12,
    },
  listItemName : {
    color:'#0c2900',
    maxWidth : '60%',
    textTransform : 'capitalize'
  },
  listItemAddButton : {
    color:'#0c2900',
    fontSize: 24,
    backgroundColor: '#85C685',
    borderRadius : 20,
    paddingHorizontal: 15,
    height: 40,
    textAlignVertical : 'center'
  },

  thumbnail : {
    width: 40,
    height : 40,
    borderRadius: 20
  },
  rightContainer : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    alignItems: 'center'
  },
});
