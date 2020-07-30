import React, {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {Icon} from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import {NetworkProvider} from 'react-native-offline';
import {NetworkConsumer} from 'react-native-offline';

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

import FoodListItem from "../components/FoodListItem";


export default AddFoodScreen = ({route}) => {

  const [searchInput, setSearchInput] = useState('');
  const [searchList, setSearchList] = useState([]);

  console.log('search:', searchInput);

  let apiQuery = 'https://trackapi.nutritionix.com/v2/search/instant?query=';

  let fullApiRequest = apiQuery.concat(searchInput);

  console.log('api request:', fullApiRequest);


  const newQuery = async () => {
    try {
      let responseResults = await fetch(fullApiRequest, {
          method: 'GET',
          headers: {
            'x-app-id': '8783b4a5',
            'x-app-key': '13fe6bc8b58cb41ca267385336522967'
          }
        }
      )


      let jsonResponseResults = await responseResults.json();
      {
        let combinedArrays = (jsonResponseResults.common).concat(jsonResponseResults.branded)
        //console.log('json:', combinedArrays)
        setSearchList(combinedArrays);
      }
    } catch (e) {
      alert('Données rentrées incomplètes 😱!')
    }


  };

  console.log('route params breakfast:', route.params);


  return (


    <SafeAreaView>
      <NetworkProvider>
        <NetworkConsumer>
          {({isConnected}) => (
            isConnected ? (
              <SearchBar
                icon={{type: 'feather'}}
                placeholder="Ma recherche d'aliments"
                onChangeText={setSearchInput}
                value={searchInput}
                onSubmitEditing={newQuery}
                platform="default"
                round
                lightTheme
              />
            ) : (
              <Text style={styles.warning}>Vous ne pouvez pas lancer de recherches en étant hors-ligne!</Text>
            )
          )}
        </NetworkConsumer>


        {
          searchList.length > 0 ?
            <FlatList
              data={searchList}
              renderItem={({item}) => <FoodListItem foodTitle={item.food_name} photo={item.photo.thumb} id={item.tag_id}
                                                    branded={item.brand_name} meal={route.params.meal}/>}
              keyExtractor={item => item.food_name}
            /> :
            <View>
              <View style={styles.loader}>
                <LottieView source={require('../assets/24703-food-animation.json')} autoPlay loop={false}/>
              </View>
              <View>
                <Text style={styles.warning}>Pas de résultats pour le moment, lancez une recherche!</Text>
              </View>
            </View>



        }

      </NetworkProvider>


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
  loader: {
    width: 350,
    height: 350,
    alignSelf: 'center',
  },
  warning: {
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 16,
    maxWidth: '90%',
    alignSelf: 'center'
  }


});
