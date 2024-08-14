import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  setCity,
} from '../store/weatherSlice';
import {RootState, AppDispatch} from '../store/store';
import moment from 'moment';
import {styles} from './styles';
import {APP_THEME} from '../assets/colors';

const API_KEY = '1635890035cbba097fd5c26c8ea672a1';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const WeatherScreen = () => {
  const [city, setCityInput] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const weather = useSelector((state: RootState) => state.weather);

  useEffect(() => {
    if (weather.city) {
      fetchWeatherData(weather.city);
    }
  }, [weather.city]);

  const fetchWeatherData = async (city: string) => {
    dispatch(fetchWeatherStart());
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
          cnt: 30
        },
      });

      const filteredData = processWeatherData(response.data.list);
      dispatch(fetchWeatherSuccess(filteredData));
    } catch (error: any) {
      dispatch(fetchWeatherFailure(error.message));
    }
  };

  const processWeatherData = (data: any[]) => {
    const dayMap: {[key: string]: any} = {};
    data.forEach(item => {
      const date = moment(item.dt_txt).format('YYYY-MM-DD');
      if (!dayMap[date]) {
        dayMap[date] = {
          date: item.dt_txt,
          temp: item.main.temp,
          pressure: item.main.pressure,
          humidity: item.main.humidity,
        };
      }
    });
    return Object.values(dayMap);
  };

  const handleSubmit = () => {
    dispatch(setCity(city));
    Keyboard.dismiss();
  };

  const itmBackGround = true;

  return (
    <>
      <Text style={styles().title}>Weather in your City</Text>
      <View style={styles().container}>
        <TextInput
          style={styles().input}
          placeholder="Enter city name"
          value={city}
          onChangeText={text => setCityInput(text)}
        />

        <TouchableOpacity style={styles().button} onPress={handleSubmit}>
          <Text style={styles().buttonTxt}>Search</Text>
        </TouchableOpacity>
        {weather.loading && (
          <ActivityIndicator size="large" color={APP_THEME} />
        )}
        {weather.error && (
          <Text style={styles().error}>{'Please Enter Valid City Name'}</Text>
        )}
        <FlatList
          data={weather.forecast}
          keyExtractor={item => item.date}
          showsVerticalScrollIndicator={false}
          style={{alignSelf: 'center'}}
          renderItem={({item}) => (
            <View style={styles().item}>
              <View style={styles().titleWrapper}>
                <Text style={styles().itemTitle}>Date: {item.date}</Text>
              </View>
              <Text style={styles().itemTitle}>Temperature</Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View style={{flex: 0.5}}>
                  <Text style={styles(itmBackGround).items}>Min</Text>
                  <Text style={styles(itmBackGround).items}>{item.temp}</Text>
                  <Text style={styles().items}>Pressure</Text>
                  <Text style={styles().items}>Humidity</Text>
                </View>

                <View style={{flex: 0.5}}>
                  <Text style={styles(itmBackGround).items}>Max</Text>
                  <Text style={styles(itmBackGround).items}>{item.temp}</Text>
                  <Text style={styles().items}>{item.pressure}</Text>
                  <Text style={styles().items}>{item.humidity}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default WeatherScreen;
