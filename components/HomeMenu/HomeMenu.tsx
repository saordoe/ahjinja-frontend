import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from "react-native";
import buttons from "assets/images/buttons.png";
import heart from "../../assets/images/heart.svg";
import home from "../../assets/images/home.svg";
import icon from "../../assets/images/icon.svg";
import image from "../../assets/images/image.svg";
import liked from "../../assets/images/liked.svg";
// var imageVar = require('../../assets/images/image.svg');

const data = [
  {
    id: '1',
    companyName: 'Company X',
    imageSource: require('../../assets/images/icon.png'),
  },
  {
    id: '2',
    companyName: 'Company Y',
    imageSource: require('../../assets/images/whitecrop.png'),
  },
  {
    id: '3',
    companyName: 'Company A',
    imageSource: require('../../assets/images/white2.png'),
  },
  {
    id: '4',
    companyName: 'Company B',
    imageSource: require('../../assets/images/blacktop.png'),
  },
  {
    id: '5',
    companyName: 'Company B',
    imageSource: require('../../assets/images/white3.png'),
  },
  {
    id: '6',
    companyName: 'Company B',
    imageSource: require('../../assets/images/white3.png'),
  },
];

export const HomeMenu = (): JSX.Element => {
  return (
    // <ScrollView contentContainerStyle={styles.homeMenu}>
      <View style={styles.homeMenu}>
      <View style={styles.div}>
        <View style={styles.overlap}>
          <View style={styles.body}>
            <View style={styles.overlapGroup}>
              {/* <View style={styles.overlap2}>
                <Card companyName="a" imageSource={require('../../assets/images/icon.png')}/>
                <Card companyName="b" imageSource={require('../../assets/images/whitecrop.png')}/>
                <Card companyName="c" imageSource={require('../../assets/images/white2.png')}/>
                <Card companyName="d" imageSource={require('../../assets/images/blacktop.png')}/>
            
                <Image style={styles.icon} source={image} />
              </View> */}
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <Card companyName={item.companyName} imageSource={item.imageSource} />
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  homeMenu: {
    // Add your styles here
  },
  div: {
    // Add your styles here
  },
  overlap: {
    // Add your styles here
  },
  body: {
    // Add your styles here
  },
  overlapGroup: {
    // Add your styles here
  },
  overlap2: {
    // Add your styles here
    display: 'flex',          // Enables Flexbox layout
    flexDirection: 'row',     // This makes the items go in a row (horizontal)
    flexWrap: 'wrap',         // Allows items to wrap into multiple rows
    justifyContent: 'center', // Centers the items horizontally
    alignItems: 'center',     // Centers the items vertically (within their row)
    width: '100%'
  },
  supportingText: {
    // Add your styles here
  },
  icon: {
    // Add your styles here
  },
  card: {
    margin: 5,
    width: '45%', 
    alignItems: 'flex-start',     // Centers the content of each item horizontally
    justifyContent: 'center', 
    paddingLeft: 5,
    overflow: 'hidden', 
  },
  cardImage: {
    width: "100%",
    height: undefined,
    borderRadius: 20,
    aspectRatio: 1,
    resizeMode: 'contain',
  },

  cardText: {
    alignItems: 'center',
    backgroundColor: 'white',
    fontWeight: 'bold',
    margin: 5
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 5,
  }
});
export const Card = ({ companyName, imageSource }: { companyName: string; imageSource: any }): JSX.Element => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>@ {companyName}</Text>
      <Image style={styles.cardImage} source={imageSource} />
      
    </View>
  );
};