import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';

import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const DemoScreen = ({navigation}) => {
  const delayed = useQuery({
    queryKey: [4],
    queryFn: async () => {
      return (await axios.get('https://hub.dummyapis.com/delay?seconds=4'))
        .data;
    },
  });
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View>
        <Text className="text-5xl font-semibold text-green-500">DEMO</Text>
        <Text>Woooow</Text>
        <Button
          title="Go To Home"
          onPress={() => navigation.navigate('Home')}
        />
        {delayed.isLoading || delayed.isRefetching ? (
          <Text>{delayed.isRefetching ? 'Refetching...' : 'Loading...'}</Text>
        ) : (
          <Text>{delayed.data}</Text>
        )}
        <Button title="Refetch RQ" onPress={() => delayed.refetch()} />
      </View>
    </ScrollView>
  );
};

export default DemoScreen;
