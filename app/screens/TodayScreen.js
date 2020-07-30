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
import AsyncStorage from "@react-native-community/async-storage";



export default  TodayScreen = ({navigation, route}) => {

  const [foodListBreakfast, setFoodListBreakfast] = useState([]);
  const [foodListLunch, setFoodListLunch] = useState([]);
  const [foodListDinner, setFoodListDinner] = useState([]);

  const actionOnTask = async (food, action) => {
    try {
      if (!food) throw new Error("Mauvais item!");

      let newStateAfterDelete1 = [...foodListBreakfast];
      let newStateAfterDelete2 = [...foodListLunch];
      let newStateAfterDelete3 = [...foodListDinner];


      switch (action) {
        case 'delete':
          switch (food.meal) {
            case "Breakfast": newStateAfterDelete1 = foodListBreakfast.filter(({id}) => id !== food.id);
              break;
            case "Lunch": newStateAfterDelete2 = foodListLunch.filter(({id}) => id !== food.id);
              break;
            case "Dinner": newStateAfterDelete3 = foodListDinner.filter(({id}) => id !== food.id);
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      //Update Component by State
      switch (food.meal) {
        case "Breakfast": setFoodListBreakfast(newStateAfterDelete1);
          break;
        case "Lunch": setFoodListLunch(newStateAfterDelete2);
          break;
        case "Dinner": setFoodListDinner(newStateAfterDelete3);
          break;
        default:
          break;
      }

    } catch (e) {
      console.log('deleting error', e);
    }
  }

  const getDataMeal1 = async () => {
    try {
      const localStateBreakfast = await AsyncStorage.getItem('breakfast');
      if(localStateBreakfast!== null) {
        setFoodListBreakfast(JSON.parse(localStateBreakfast));
      } else { null }
    } catch(e) {
      console.log('async error:', e)
    }
  }

  const getDataMeal2 = async () => {
    try {
      const localStateLunch = await AsyncStorage.getItem('lunch');
      if(localStateLunch !== null) {
        setFoodListLunch(JSON.parse(localStateLunch));
      } else { null }
    } catch(e) {
      console.log('async error:', e)
    }
  }

  const getDataMeal3 = async () => {
    try {
      const localStateDinner = await AsyncStorage.getItem('dinner');
      if(localStateDinner !== null) {
        setFoodListDinner(JSON.parse(localStateDinner));
      } else { null }
    } catch(e) {
      console.log('async error:', e)
    }
  }

  useEffect( () => {
    getDataMeal1();
    getDataMeal2();
    getDataMeal3();
  }, [route.params]
  )




  useEffect(() => {
    if (route.params) {
      let newState;
      switch (route.params.meal) {
        case "Breakfast":
          newState = [...foodListBreakfast,
            {
              id: 'id' + route.params.foodTitle + Math.random() ,
              title: route.params.foodTitle,
              photo: route.params.photo,
              meal : route.params.meal,
              specificState : 'foodListBreakfast'
            }];
          setFoodListBreakfast(newState);
          AsyncStorage.setItem('breakfast', JSON.stringify(newState));

          break;
        case "Lunch":
          newState = [...foodListLunch,
            {
              id: 'id' + route.params.foodTitle + Math.random() ,
              title: route.params.foodTitle,
              photo: route.params.photo,
              meal : route.params.meal,
              specificState : 'foodListLunch'
            }];
          setFoodListLunch(newState);
          AsyncStorage.setItem('lunch', JSON.stringify(newState));
          break;
        case "Dinner":
          newState = [...foodListDinner,
            {
              id: 'id' + route.params.foodTitle + Math.random() ,
              title: route.params.foodTitle,
              photo: route.params.photo,
              meal : route.params.meal,
              specificState : 'foodListDinner'
            }];
          setFoodListDinner(newState);
          AsyncStorage.setItem('dinner', JSON.stringify(newState));
          break;
        default:
          break;
      }
    }

  },[route.params]
);

  console.log('foodlistBreakfast:', foodListBreakfast)



  /* Version provisoire basée uniquement sur item et route.params.


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


console.log('listItem ', foodListBreakfast )
  return (
    <SafeAreaView >
      <View style={styles.body}>

        <View style={styles.mealContainer}>
          <View style={styles.mealTitle}>
            <Text style={styles.mealTitleText}>Petit déjeuner</Text>
            <TouchableOpacity

              onPress={() => navigation.navigate('AddFoodScreen', {meal:'Breakfast'} )}
            >
              <View>
                <Text style={styles.mealTitlePlusButton}>+</Text>
              </View>
            </TouchableOpacity>
          </View>

          {
            foodListBreakfast.length > 0?
              <FlatList
                data={foodListBreakfast}
                renderItem={({ item }) => <ListItem foodTitle={item.title} id = {item.id} photo={item.photo} food={item} navigation={navigation} meal={item.meal} specificState={'foodListBreakfast'} removeAction={actionOnTask}/>}
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

              onPress={() => navigation.navigate('AddFoodScreen', {meal:'Lunch'})}
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
                renderItem={({ item }) => <ListItem foodTitle={item.title} id = {item.id} photo={item.photo} food={item} navigation={navigation} meal={item.meal} specificState={'foodListBreakfast'} removeAction={actionOnTask}/>}
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

              onPress={() => navigation.navigate('AddFoodScreen', {meal:'Dinner'})}
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
                renderItem={({ item }) => <ListItem foodTitle={item.title} id = {item.id} photo={item.photo} food={item} navigation={navigation} meal={item.meal} specificState={'foodListBreakfast'} removeAction={actionOnTask}/>}
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

