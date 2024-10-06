import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Pressable } from "react-native";

export const DetailMenu = (): JSX.Element => {
 
  return (
    <ScrollView contentContainerStyle={styles.homeMenu}>
        <View style={styles.top}>
            <TouchableOpacity onPress={() => {console.log('Back Button pressed!');}} style={styles.backContainer}>
                <Image
                source={require('../../assets/images/back.png')} 
                style={styles.backIcon}
                />
            </TouchableOpacity>
            <Text style={styles.title}>Details</Text>
        </View>
        <Image
                source={require('../../assets/images/cropped.png')} 
                style={styles.big}
        />
        <View style={styles.details}>
            <View style={styles.pair}>
                <Text style={styles.boldT}>name: </Text>
                <Text style={styles.norm}>XXX</Text>
            </View>
            <View style={styles.pair}>
                <Text style={styles.boldT}>brand: </Text>
                <Text style={styles.norm}>XXX</Text>
            </View>
            <View style={styles.pair}>
                <Text style={styles.boldT}>style: </Text>
                <Text style={styles.norm}>XXX</Text>
            </View>
            <View style={styles.pair}>
                <Text style={styles.boldT}>occasion: </Text>
                <Text style={styles.norm}>XXX</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
            <Text style={styles.buttonText}>Generate</Text>
            <Image
                source={require('../../assets/images/arrow.png')} 
                style={styles.genIcon}
                />
        </TouchableOpacity>
        
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  homeMenu: {
    width: "100%",
    padding: "7%"
  },
  top:{
    flexDirection: 'row',           // Align items in a row (horizontally)
    justifyContent: 'flex-start', // Space between title and arrow button
    alignItems: 'center',
    
  },
  backIcon:{
    width: 24,                      // Set the width of the arrow PNG
    height: 24,                     // Set the height of the arrow PNG
    resizeMode: 'contain',    
  },
  genIcon:{
    width: 15,
    height:15,
    resizeMode: 'contain'

  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
  },
  backContainer:{
    

  },
  big:{
    height: 200,
    resizeMode: "contain",
    width: "100%",
    borderWidth: 2,
    borderColor: "#BBBBBB",
    borderRadius: 15,
    marginTop: "30%",
    marginBottom: "5%",
    alignItems: "center"
  },
  details:{


  },
  pair:{
    flexDirection: 'row',           // Align items in a row (horizontally)
    justifyContent: 'flex-start', // Space between title and arrow button
    alignItems: 'flex-start',
    marginBottom: 3,
    marginLeft: 2
  },
  boldT:{
    fontWeight: "bold",
    fontSize: 16
  },
  norm:{
    fontSize: 16
  },
  button: {
    position: 'absolute',     // Position the button absolutely
    bottom: "-35%",               // Distance from the bottom (adjust as needed)
    right:"12%",                 // Distance from the left side (adjust as needed)
    backgroundColor: '#888888', // Button background color (blue in this case)
    paddingVertical: 10,      // Vertical padding for button content
    paddingHorizontal: 15,    // Horizontal padding for button content
    borderRadius: 25,          // Rounded corners for the button
    flexDirection: 'row',           // Align items in a row (horizontally)
    justifyContent: 'flex-start', // Space between title and arrow button
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',           // Text color
    fontSize: 15,             // Text size
    fontWeight: 'bold',       // Bold text
    marginRight: 10,
  },
});

