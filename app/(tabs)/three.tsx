import { StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';


export default function TabThreeScreen() {

  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName} // Update the state with the user's input
      />
      <View style={styles.icons__container}>
        <View style={styles.circle}></View>
        <View style={styles.icons__rightcontainer}>
          <Text style={styles.name}>{name ? `${name}'s Closet` : "Name's Closet"}</Text>
          <View style={styles.buttons__container}>
            <View style={styles.add__button}>
              
            </View>
            <View style={styles.outfits__button}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons__container: {
    marginTop: 20,
    flex:1,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icons__rightcontainer: {
    marginLeft: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  circle: {
    width: 110, // diameter of the circle
    height: 110, // diameter of the circle
    borderRadius: 55, // half of the diameter to make it a circle
    backgroundColor: '#D9D9D9', // color of the circle
    paddingHorizontal: 10,
    marginRight: 10,
    
  },
  add__button: {
    width: 80, // diameter of the circle
    height: 70, // diameter of the circle
    borderRadius: 20, // half of the diameter to make it a circle
    backgroundColor: '#EFEFEF', // color of the circle
    marginRight: 10,
  },
  outfits__button: {
    width: 90, // diameter of the circle
    height: 110, // diameter of the circle
    borderRadius: 20, // half of the diameter to make it a circle
    backgroundColor: '#EFEFEF', // color of the circle
    marginRight: 10,
  },
  buttons__container: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
  },
  
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
  },
});
