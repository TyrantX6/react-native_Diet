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



export default  TodayScreen = ({navigation, route}) => {

  const [foodListBreakFast, setFoodListBreakfast] = useState([]);
  const [foodListLunch, setFoodListLunch] = useState([]);
  const [foodListDinner, setFoodListDinner] = useState([]);
  const [foodList2, setFoodList2] = useState([]);


  useEffect(() => {
    if (route.params) {
      let newState;
      switch (route.params.meal) {
        case "breakfast":
          newState = [...foodListBreakFast,
            {
              id: 'id' + route.params.foodTitle + Math.random(route.params.foodTitle) ,
              title: route.params.foodTitle,
              photo: route.params.photo,
              meal : route.params.meal,
            }];

          setFoodListBreakfast(newState);
          break;
        case "lunch":
          newState = [...foodListLunch,
            {
              id: 'id' + route.params.foodTitle + Math.random(route.params.foodTitle) ,
              title: route.params.foodTitle,
              photo: route.params.photo,
              meal : route.params.meal,
            }];

          setFoodListLunch(newState);
          break;
        case "dinner":
          newState = [...foodListDinner,
            {
              id: 'id' + route.params.foodTitle + Math.random(route.params.foodTitle) ,
              title: route.params.foodTitle,
              photo: route.params.photo,
              meal : route.params.meal,
            }];

          setFoodListDinner(newState);
          break;
        default:
          break;

      }

    }
  },[route.params]
);

  console.log('foodlistBreakfast:', foodListBreakFast)

  /* Version intermédiaire basée uniquement sur item et route.params.


  let routeContent = '';

  if (route.params) {
    routeContent =
      <View style={styles.listItemContainer}>
        <Text>{route.params.foodTitle}</Text>
        <TouchableOpacity
          //onPress={() => clearRouteParams()}
        >
          <View>
            <Text style={styles.listItemDeleteButton}>X</Text>
          </View>
        </TouchableOpacity>
    </View>
  } else {
    routeContent =
      <Text style={styles.noFoodYetText}>
        Vous n’avez pas encore ajouté d’aliments pour ce ARNAUD.
      </Text>
  }*/




  return (
    <SafeAreaView >
      <View style={styles.body}>

        <View style={styles.mealContainer}>
          <View style={styles.mealTitle}>
            <Text style={styles.mealTitleText}>Petit déjeuner</Text>
            <TouchableOpacity

              onPress={() => navigation.navigate('AddFoodScreen', {meal:'breakfast'} )}
            >
              <View>
                <Text style={styles.mealTitlePlusButton}>+</Text>
              </View>
            </TouchableOpacity>
          </View>

          {
            foodListBreakFast.length > 0?
              <FlatList
                data={foodListBreakFast}
                renderItem={({ item }) => <ListItem foodTitle={item.title} id = {item.id} photo={item.photo} food={item} navigation={navigation}/>}
                keyExtractor={item => item.id}
              /> :
              <Text style={styles.noFoodYetText}>
                Vous n’avez pas encore ajouté d’aliments pour ce petit-déjeuner.
              </Text>
          }
        </View>


        <View style={styles.mealContainer}>
          <View style={styles.mealTitle}>
            <Text style={styles.mealTitleText}>Déjeuner</Text>
            <TouchableOpacity

              onPress={() => navigation.navigate('AddFoodScreen', {meal:'lunch'})}
            >
              <View>
                <Text style={styles.mealTitlePlusButton}>+</Text>
              </View>
            </TouchableOpacity>
          </View>

          {
            foodListLunch.length > 0?
              <FlatList
                data={foodListLunch}
                renderItem={({ item }) => <ListItem foodTitle={item.title} id = {item.id} photo={item.photo} food={item} navigation={navigation}/>}
                keyExtractor={item => item.id}
              /> :
              <Text style={styles.noFoodYetText}>
                Vous n’avez pas encore ajouté d’aliments pour ce déjeuner.
              </Text>
          }
        </View>


        <View style={styles.mealContainer}>
          <View style={styles.mealTitle}>
            <Text style={styles.mealTitleText}>Diner</Text>
            <TouchableOpacity

              onPress={() => navigation.navigate('AddFoodScreen', {meal:'dinner'})}
            >
              <View>
                <Text style={styles.mealTitlePlusButton}>+</Text>
              </View>
            </TouchableOpacity>
          </View>

          {
            foodListDinner.length > 0?
              <FlatList
                data={foodListDinner}
                renderItem={({ item }) => <ListItem foodTitle={item.title} id = {item.id} photo={item.photo} food={item} navigation={navigation}/>}
                keyExtractor={item => item.id}
              /> :
              <Text style={styles.noFoodYetText}>
                Vous n’avez pas encore ajouté d’aliments pour ce diner.
              </Text>
          }
        </View>


        <View style={styles.mealContainer}>
          <View style={styles.mealTitle}>
            <Text style={styles.mealTitleText}>Résumé</Text>
          </View>

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
  },
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

