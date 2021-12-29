import React from 'react'
import { FlatList, Text, View } from "react-native";

import { ListDivider } from '../../components/ListDivider';
import { Guild } from '../../components/Guild';
import { styles } from "./styles";

export function Guilds(){
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: true
    }
  ];

  return(
    <View style={styles.container}>
      <FlatList data={guilds}
        keyExtractor={item => item.id }
        renderItem={({ item }) => (
          <Guild data={ item } />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        ListHeaderComponent={() => <ListDivider />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        style={styles.guilds} />
    </View>
  )
}