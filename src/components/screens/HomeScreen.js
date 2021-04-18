import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import tailwind from 'tailwind-rn';

import { ROUTES } from '../../config';

const HomeScreen = ({ navigation }) => (
  <View style={tailwind('h-screen bg-blue-300 flex flex-1 items-center')}>
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTES.HOMESTACK.SECOND)}
    >
      <Text style={tailwind('text-white text-3xl')}>Next Screen</Text>
    </TouchableOpacity>
  </View>
);

export default HomeScreen;
