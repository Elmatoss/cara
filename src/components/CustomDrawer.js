import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import tailwind from 'tailwind-rn';

const CustomDrawer = () => {
  const textStyle = tailwind(
    'text-2xl font-semibold tracking-wider text-gray-800',
  );

  return (
    <SafeAreaView style={tailwind('flex flex-1 bg-gray-200')}>
      <View style={tailwind('flex flex-1 flex-col mt-40 ml-8')}>
        <TouchableOpacity>
          <Text style={textStyle}>Home</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <View>
              <Text></Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={tailwind('h-0.5 bg-black my-8')} />
        <TouchableOpacity>
          <Text style={textStyle}>Products</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawer;
