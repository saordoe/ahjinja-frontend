import { StyleSheet, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FilterButton from '@/components/uiComponents/FilterButton';
import CardTemplate from '@/components/uiComponents/CardTemplate';

export default function TabThreeScreen() {
  const [name, setName] = useState('');
  const [liked, setLiked] = useState(false); // State to track if the card is liked

  // Toggle the like status
  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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
              <MaterialCommunityIcons style={styles.plus__sign} name="plus" size={32} color='black' />
            </View>
            <View style={styles.outfits__button}></View>
          </View>
        </View>
      </View>
      <View style={styles.filter__bar}>
        <FilterButton
          size="medium"
          color="#7C7777"
          text="All"
          onPress={() => {
            console.log('Button pressed!'); //temporary, will later filter the clothes to show all
          }}
        />
        <FilterButton
          size="medium"
          color="#7C7777"
          text="Top"
          onPress={() => {
            console.log('Button pressed!'); //temporary, will later filter the clothes to show tops
          }}
        />
        <FilterButton
          size="medium"
          color="#7C7777"
          text="Bottom"
          onPress={() => {
            console.log('Button pressed!');
          }}
        />
        <FilterButton
          size="medium"
          color="#7C7777"
          text="All"
          onPress={() => {
            console.log('Button pressed!');
          }}
        />
      </View>
      <View style={styles.cards__container}>
        <View style={styles.cards__row}>
          <CardTemplate
            companyName="lololol"
            imageSource={require('../../assets/images/cropped.png')}
            onLike={handleLike}
            liked={liked}
          />
          <CardTemplate
            companyName="lololol"
            imageSource={require('../../assets/images/cropped.png')}
            onLike={handleLike}
            liked={liked}
          />
        </View>
        <View style={styles.cards__row}>
          <CardTemplate
            companyName="lololol"
            imageSource={require('../../assets/images/cropped.png')}
            onLike={handleLike}
            liked={liked}
          />
          <CardTemplate
            companyName="lololol"
            imageSource={require('../../assets/images/cropped.png')}
            onLike={handleLike}
            liked={liked}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Ensure ScrollView content takes up space
    alignItems: 'center', // Center items horizontally
    justifyContent: 'flex-start',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons__container: {
    marginTop: 20,
    flex: 1,
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
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  add__button: {
    width: 80,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus__sign: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outfits__button: {
    width: 90,
    height: 110,
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
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
  filter__bar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '88%',
    marginTop: 20,
  },
  cards__container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cards__row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
});
