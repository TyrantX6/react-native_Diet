import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,

} from 'react-native';



export default ListItem = props => {

  return (
    <View style={styles.listItemContainer}>
      <Text>{props.foodTitle}</Text>
      <TouchableOpacity
        onPress={console.log('bouton touché')}
      >
        <View>
          <Text style={styles.listItemDeleteButton}>X</Text>
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
  }
});
