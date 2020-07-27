import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';


export default AddFoodScreen = ({navigation}) => {

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');


  return (

    <SafeAreaView style={styles.container}>
      <Text>TEST</Text>
    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginVertical: 20,
  },


});
