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

  return (
    <View style={styles.listItemContainer}>
      <Text>{food.foodTitle}</Text>
      <TouchableOpacity
        //onPress={console.log('bouton touché')}
      >
        <View style={styles.rightContainer}>
          {image}
          <View>
            <Text style={styles.listItemDeleteButton}>X</Text>
          </View>
        </View>
      </TouchableOpacity>
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
    paddingHorizontal: 16
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
