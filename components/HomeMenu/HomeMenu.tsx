import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import buttons from "../../assets/images/buttons.png";
import heart from "../../assets/images/heart.svg";
import home from "../../assets/images/home.svg";
import icon from "../../assets/images/icon.svg";
import image from "../../assets/images/image.svg";
import liked from "../../assets/images/liked.svg";

export const HomeMenu = (): JSX.Element => {
  return (
    <View style={styles.homeMenu}>
      <View style={styles.div}>
        <View style={styles.overlap}>
          <View style={styles.body}>
            <View style={styles.overlapGroup}>
              <View style={styles.overlap2}>
                <Card />
                <Card />
                <Image style={styles.icon} source={image} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
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
  },
  supportingText: {
    // Add your styles here
  },
  icon: {
    // Add your styles here
  },
  card: {
    backgroundColor: 'gray'
  },
  cardImage: {
    // Add your styles here
  },
  cardText: {
    alignItems: 'center'
  },
});
export const Card = (): JSX.Element => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={icon} />
      <Text style={styles.cardText}>Card Title</Text>
    </View>
  );
};