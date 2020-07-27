import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,


} from 'react-native';
import ListItem from "../components/ListItem";



export default  TodayScreen = ({navigation}) => {

  const [inputNewFood, setInputNewFood] = useState('');
  const [foodList2, setFoodList2] = useState([]);
  const [foodList, setFoodList] = useState([
    {
      title : 'Jus d\'orange',
      id : '1',
    },
    {
      title : 'Lait',
      id : '2',
    },
    {
      title : 'Céréales',
      id : '3',
    },

  ]);

  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <SafeAreaView >
      <View style={styles.body}>
        <View style={styles.mealContainer}>
          <View style={styles.mealTitle}>
            <Text style={styles.mealTitleText}>Petit déjeuner</Text>
            <TouchableOpacity

              onPress={() => navigation.navigate('AddFoodScreen')}
            >
              <View>
                <Text style={styles.mealTitlePlusButton}>+</Text>
              </View>
            </TouchableOpacity>
          </View>

          {
            foodList.length > 0?
              <FlatList
                data={foodList}
                renderItem={({ item }) => <ListItem foodTitle={item.title} id = {item.id}  />}
                keyExtractor={item => item.id}
              /> :
              <Text style={styles.noFoodYetText}>
                Vous n’avez pas encore ajouté d’aliments pour ce repas.
              </Text>
          }
        </View>


        <View style={styles.mealContainer}>
          <View style={styles.mealTitle}>
            <Text style={styles.mealTitleText}>Déjeuner</Text>
            <TouchableOpacity

              onPress={() => navigation.navigate('AddFoodScreen')}
            >
              <View>
                <Text style={styles.mealTitlePlusButton}>+</Text>
              </View>
            </TouchableOpacity>
          </View>

          {
            foodList2.length > 0?
              <FlatList
                data={foodList}
                renderItem={({ item }) => <ListItem foodTitle={item.title} id = {item.id}  />}
                keyExtractor={item => item.id}
              /> :
              <Text style={styles.noFoodYetText}>
                Vous n’avez pas encore ajouté d’aliments pour ce repas.
              </Text>
          }
        </View>


        <View style={styles.mealContainer}>
          <View style={styles.mealTitle}>
            <Text style={styles.mealTitleText}>Diner</Text>
            <TouchableOpacity

              onPress={() => navigation.navigate('AddFoodScreen')}
            >
              <View>
                <Text style={styles.mealTitlePlusButton}>+</Text>
              </View>
            </TouchableOpacity>
          </View>

          {
            foodList2.length > 0?
              <FlatList
                data={foodList}
                renderItem={({ item }) => <ListItem foodTitle={item.title} id = {item.id}  />}
                keyExtractor={item => item.id}
              /> :
              <Text style={styles.noFoodYetText}>
                Vous n’avez pas encore ajouté d’aliments pour ce repas.
              </Text>
          }
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor:'#EDEDED'
  },
  mealContainer : {
    marginTop : 12,
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
    fontSize: 20,
  },
  mealTitlePlusButton : {
    color:'#EFEFEF',
    fontSize: 30,
    backgroundColor: '#85C685',
    borderRadius : 20,
    paddingHorizontal: 16
  },
  noFoodYetText : {
    flexDirection: 'row',
    width: '100%',
    maxWidth : '80%',
    alignSelf : 'center',
    paddingVertical: 16,
  }


});

