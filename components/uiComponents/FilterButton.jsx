import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const FilterButton = ({ size, color, text, onPress }) => {
  const buttonSize = size === 'large' ? 80 : size === 'medium' ? 60 : 40;

  return (
    <TouchableOpacity
      style={[styles.button, { width: buttonSize + 20, height: buttonSize - 20, backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { fontSize: size === 'large' ? 18 : size === 'medium' ? 14 : 12 }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 40, // Half of the button's width and height to make it circular
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

FilterButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func, // To handle button clicks
};

FilterButton.defaultProps = {
  size: 'medium',
  color: '#EFEFEF',
  onPress: () => {}, // Default to no-op if not provided
};

export default FilterButton;
