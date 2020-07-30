import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet, Image,

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default ListItem = food => {

  const xIcon = <Icon name='minus-circle-outline' size={26} color="white"/>;

  let image;
  if (food.photo == 'https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png') {
    image = <Text></Text>
  } else {
    image = <Image
      style={styles.thumbnail}
      source={{
        uri: food.photo
      }}
    />
  }
  ;

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
          onPress={() => food.removeAction(food, 'delete')}
        >
          <View>
            <Text style={styles.listItemDeleteButton}>{xIcon}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'100%',
    maxWidth:'90%',
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 2,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(83, 155, 52, 0.8)',
    borderRadius: 20
  },
  listItemDeleteButton: {
    color: '#EFEFEF',
    backgroundColor: '#85C685',
    borderRadius: 30,
    padding: 4,

  },
  listItemName: {
    color: '#0c2900',
    fontSize: 16,
    fontWeight: 'bold',
    maxWidth: '70%',
    textTransform: 'capitalize',
  },
  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  rightContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    alignItems: 'center'
  }
});
