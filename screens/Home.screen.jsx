import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text className="text-5xl font-semibold text-red-500">Wadidaw</Text>
        <Text>Woooow</Text>
        <Button
          title="Go To Demo"
          onPress={() => navigation.navigate('Demo')}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
