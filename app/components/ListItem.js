import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet, Image,

} from 'react-native';



export default ListItem = food => {

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


  return (

    <View style={branded}>
      <Text style={styles.listItemName}>
        {food.foodTitle}
      </Text>
      <View style={styles.rightContainer}>
        {image}
        <TouchableOpacity
          onPress={() => food.removeAction(food,'delete')}
        >
          <View>
            <Text style={styles.listItemDeleteButton}>X</Text>
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
    marginHorizontal: 30,
    paddingVertical:15,
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1,
    alignItems : 'center'
  },
  listItemDeleteButton : {
    color:'#EFEFEF',
    fontSize: 22,
    backgroundColor: '#85C685',
    borderRadius : 20,
    paddingHorizontal: 13,
    paddingVertical: 4
  },
  listItemName : {
    color:'#0c2900',
    maxWidth : '60%',
    textTransform : 'capitalize'
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
  }
});
