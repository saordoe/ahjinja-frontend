import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const data = [
  {
    id: '1',
    imageSource: require('../../assets/images/icon.png'),
  },
  {
    id: '2',
    imageSource: require('../../assets/images/cropped.png'),
  },
  {
    id: '3',
    imageSource: require('../../assets/images/white2.png'),
  },
  {
    id: '4',
    imageSource: require('../../assets/images/cropped.png'),
  },
  {
    id: '5',
    imageSource: require('../../assets/images/model1.png'),
  },
];

// Split the data into two columns
const splitDataIntoColumns = (data: any[]) => {
  const leftColumn = [];
  const rightColumn = [];
  for (let i = 0; i < data.length; i++) {
    if (i % 2 === 0) {
      leftColumn.push(data[i]); // Add to left column
    } else {
      rightColumn.push(data[i]); // Add to right column
    }
  }
  return { leftColumn, rightColumn };
};


export const LikeMenu = (): JSX.Element => {
  const { leftColumn, rightColumn } = splitDataIntoColumns(data);
  return (
    <ScrollView contentContainerStyle={styles.homeMenu}>
              <View style={styles.overlap2}>
                      {/* Left Column */}
                      <View style={styles.column}>
                        {leftColumn.map((item) => (
                          <Card key={item.id} imageSource={item.imageSource} />
                        ))}
                      </View>
                      
                      {/* Right Column */}
                      <View style={styles.column}>
                        {rightColumn.map((item) => (
                          <Card key={item.id} imageSource={item.imageSource} />
                        ))}
                      </View>
                </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  homeMenu: {
    // Add your styles here
  },
  overlap2: {
    // Add your styles here
    display: 'flex',          // Enables Flexbox layout
    flexDirection: 'row',     // This makes the items go in a row (horizontal)
    flexWrap: 'wrap',         // Allows items to wrap into multiple rows
    justifyContent: 'center', // Centers the items horizontally
    alignItems: 'flex-start',     // Centers the items vertically (within their row)
    width: '100%'
  },
  card: {
    margin: 5,
    //width: '45%', 
    alignItems: 'flex-start',     // Centers the content of each item horizontally
    justifyContent: 'center', 
    paddingLeft: 5,
    overflow: 'visible', 
    padding: 15, // Increased padding inside each card
    
    position: 'relative', // Ensures child elements with absolute positioning are relative to the card
  },
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 20,
    resizeMode: 'cover',
    
  },
  column: {
    //flex: 1, // Each column takes up half the width
    marginHorizontal: 5, // Add space between columns
    width: "45%",
  },
  heartIcon: {
    position: 'absolute', // Absolute positioning for the heart icon
    top: 10, // Position it near the top
    right: 10, // Position it near the right edge
    width: 20, // Size of the heart icon
    height: 20,
    zIndex: 1, // Ensures it appears on top of the card

  },
});

export const Card = ({ imageSource }: { imageSource: any }): JSX.Element => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={imageSource} />
      <Image source={require('../../assets/images/heart.png')} style={styles.heartIcon} />
    </View>
  );
};
