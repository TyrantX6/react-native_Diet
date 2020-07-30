import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,


} from 'react-native';
import ListItem from "../components/ListItem";
import AsyncStorage from "@react-native-community/async-storage";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default TodayScreen = ({navigation, route}) => {

  const [foodListBreakfast, setFoodListBreakfast] = useState([]);
  const [foodListLunch, setFoodListLunch] = useState([]);
  const [foodListDinner, setFoodListDinner] = useState([]);

  let foodCount = foodListBreakfast.length + foodListLunch.length + foodListDinner.length

  const actionOnTask = async (food, action) => {
    try {
      if (!food) throw new Error("Mauvais item!");

      let newStateAfterDelete1 = [...foodListBreakfast];
      let newStateAfterDelete2 = [...foodListLunch];
      let newStateAfterDelete3 = [...foodListDinner];


      switch (action) {
        case 'delete':
          switch (food.meal) {
            case "Breakfast":
              newStateAfterDelete1 = foodListBreakfast.filter(({id}) => id !== food.id);
              break;
            case "Lunch":
              newStateAfterDelete2 = foodListLunch.filter(({id}) => id !== food.id);
              break;
            case "Dinner":
              newStateAfterDelete3 = foodListDinner.filter(({id}) => id !== food.id);
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
        case "Breakfast":
          setFoodListBreakfast(newStateAfterDelete1);
          AsyncStorage.setItem('breakfast', JSON.stringify(newStateAfterDelete1));
          break;
        case "Lunch":
          setFoodListLunch(newStateAfterDelete2);
          AsyncStorage.setItem('lunch', JSON.stringify(newStateAfterDelete2));
          break;
        case "Dinner":
          setFoodListDinner(newStateAfterDelete3);
          AsyncStorage.setItem('dinner', JSON.stringify(newStateAfterDelete3));
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
      if (localStateBreakfast !== null) {
        setFoodListBreakfast(JSON.parse(localStateBreakfast));
      } else {
        null
      }
    } catch (e) {
      console.log('async error:', e)
    }
  }

  const getDataMeal2 = async () => {
    try {
      const localStateLunch = await AsyncStorage.getItem('lunch');
      if (localStateLunch !== null) {
        setFoodListLunch(JSON.parse(localStateLunch));
      } else {
        null
      }
    } catch (e) {
      console.log('async error:', e)
    }
  }

  const getDataMeal3 = async () => {
    try {
      const localStateDinner = await AsyncStorage.getItem('dinner');
      if (localStateDinner !== null) {
        setFoodListDinner(JSON.parse(localStateDinner));
      } else {
        null
      }
    } catch (e) {
      console.log('async error:', e)
    }
  }
  useEffect(() => {
      getDataMeal1();
      getDataMeal2();
      getDataMeal3();
    }, []
  )


  useEffect(() => {
      if (route.params) {
        let newState;
        switch (route.params.meal) {
          case "Breakfast":
            newState = [...foodListBreakfast,
              {
                id: 'id' + route.params.foodTitle + Math.random(),
                title: route.params.foodTitle,
                photo: route.params.photo,
                meal: route.params.meal,
                specificState: 'foodListBreakfast'
              }];
            setFoodListBreakfast(newState);
            AsyncStorage.setItem('breakfast', JSON.stringify(newState));

            break;
          case "Lunch":
            newState = [...foodListLunch,
              {
                id: 'id' + route.params.foodTitle + Math.random(),
                title: route.params.foodTitle,
                photo: route.params.photo,
                meal: route.params.meal,
                specificState: 'foodListLunch'
              }];
            setFoodListLunch(newState);
            AsyncStorage.setItem('lunch', JSON.stringify(newState));
            break;
          case "Dinner":
            newState = [...foodListDinner,
              {
                id: 'id' + route.params.foodTitle + Math.random(),
                title: route.params.foodTitle,
                photo: route.params.photo,
                meal: route.params.meal,
                specificState: 'foodListDinner'
              }];
            setFoodListDinner(newState);
            AsyncStorage.setItem('dinner', JSON.stringify(newState));
            break;
          default:
            break;
        }
      }

    }, [route.params]
  );

  //icones
  const plusIcon = <Icon name='plus-circle-outline' size={36} color="white"/>;

  console.log('foodlistBreakfast:', foodListBreakfast)

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={require('../assets/bg2.jpg')} style={styles.background} resizeMode='stretch'>
          <View>

            <View style={styles.mealContainer}>
              <View style={styles.mealTitle}>
                <Text style={styles.mealTitleText}>Petit déjeuner</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AddFoodScreen', {meal: 'Breakfast'})}
                >
                  <View>
                    <Text style={styles.mealTitlePlusButton}>{plusIcon}</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {
                foodListBreakfast.length > 0 ?
                  <FlatList
                    data={foodListBreakfast}
                    renderItem={({item}) => <ListItem foodTitle={item.title} id={item.id} photo={item.photo} food={item}
                                                      navigation={navigation} meal={item.meal}
                                                      specificState={'foodListBreakfast'} removeAction={actionOnTask}/>}
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
                  onPress={() => navigation.navigate('AddFoodScreen', {meal: 'Lunch'})}
                >
                  <View>
                    <Text style={styles.mealTitlePlusButton}>{plusIcon}</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {
                foodListLunch.length > 0 ?
                  <FlatList
                    data={foodListLunch}
                    renderItem={({item}) => <ListItem foodTitle={item.title} id={item.id} photo={item.photo} food={item}
                                                      navigation={navigation} meal={item.meal}
                                                      specificState={'foodListBreakfast'} removeAction={actionOnTask}/>}
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
                  onPress={() => navigation.navigate('AddFoodScreen', {meal: 'Dinner'})}
                >
                  <View>
                    <Text style={styles.mealTitlePlusButton}>{plusIcon}</Text>
                  </View>
                </TouchableOpacity>
              </View>

              {
                foodListDinner.length > 0 ?
                  <FlatList
                    data={foodListDinner}
                    renderItem={({item}) => <ListItem foodTitle={item.title} id={item.id} photo={item.photo} food={item}
                                                      navigation={navigation} meal={item.meal}
                                                      specificState={'foodListBreakfast'} removeAction={actionOnTask}/>}
                    keyExtractor={item => item.id}
                  /> :
                  <Text style={styles.noFoodYetText}>
                    Vous n’avez pas encore ajouté d’aliments pour ce diner.
                  </Text>
              }
            </View>


            <View style={styles.mealContainer}>
              <View style={styles.mealTitle}>
                <Text style={styles.summaryTitle}>Résumé</Text>
              </View>
              <Text style={styles.summary}>Vous avez consommé {foodCount} ingrédients aujourd'hui!</Text>
              <Text style={styles.summary2}>Dont {foodListBreakfast.length} au petit déjeuner, {foodListLunch.length} au
                déjeuner et {foodListDinner.length} au diner.</Text>
              <Text style={styles.footer}>By Thomas Pottier</Text>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
    bottom: 0

  },
  mealContainer: {
    marginTop: 12,
    alignContent: 'center',
  },
  mealTitle: {
    flexDirection: 'row',
    backgroundColor: '#3A8E3A',
    paddingVertical: 6,
    paddingHorizontal: 12,
    width: '100%',
    maxWidth: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  mealTitleText: {
    color: '#EFEFEF',
    fontSize: 20,
  },
  summaryTitle: {
    color: '#EFEFEF',
    fontSize: 20,
    paddingVertical: 10,
  },
  mealTitlePlusButton: {
    color: '#EFEFEF',
    backgroundColor: '#85C685',
    borderRadius: 30,
    padding: 4,
    alignItems: 'center'
  },
  noFoodYetText: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: '80%',
    alignSelf: 'center',
    paddingVertical: 16,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    paddingVertical: 15,
    borderBottomColor: '#9e9e9e',
    borderBottomWidth: 1,
    alignItems: 'center'
  },
  listItemDeleteButton: {
    color: '#EFEFEF',
    fontSize: 22,
    backgroundColor: '#85C685',
    borderRadius: 40,
    paddingHorizontal: 16
  },
  summary: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 20,
    maxWidth: '90%',
    alignSelf: 'center'
  },
  summary2: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 16,
    maxWidth: '90%',
    alignSelf: 'center'
  },
  footer: {
    textAlign: 'center',
    textAlignVertical: 'bottom'
  },


});

