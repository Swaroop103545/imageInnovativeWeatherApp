import {StyleSheet} from 'react-native';
import {
  APP_THEME,
  APP_THEME_SECONDARY,
  BLACK,
  GRAY,
  WHITE,
} from '../assets/colors';

export const styles = (itmBackGround?: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: WHITE,
      paddingHorizontal: 60,
    },
    title: {
      color: APP_THEME_SECONDARY,
      fontSize: 36,
      fontWeight: '400',
      marginVertical: 14,
      marginTop: 24,
      alignSelf: 'center',
    },
    input: {
      height: 40,
      borderColor: APP_THEME_SECONDARY,
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
      borderRadius: 10,
      paddingLeft: 14,
    },
    button: {
      backgroundColor: APP_THEME_SECONDARY,
      padding: 5,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 24,
    },
    buttonTxt: {
      color: WHITE,
      fontWeight: 'bold',
    },
    item: {
      borderWidth: 1,
      marginVertical: 10,
      borderRadius: 5,
      width: 250,
    },
    items: {
      borderWidth: 1,
      textAlign: 'center',
      padding: 4,
      backgroundColor: itmBackGround ? GRAY : WHITE,
      fontWeight: '600',
    },
    titleWrapper: {
      backgroundColor: APP_THEME,
      borderBottomWidth: 1,
    },
    itemTitle: {
      alignSelf: 'center',
      fontWeight: 'bold',
      color: BLACK,
      fontSize: 18,
      marginVertical: 4,
    },
    error: {
      color: 'red',
      marginBottom: 16,
    },
  });
