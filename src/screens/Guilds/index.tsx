import React from 'react'
import { FlatList, Text, TouchableOpacityProps, View } from "react-native";

import { ListDivider } from '../../components/ListDivider';
import { Guild, GuildProps } from '../../components/Guild';
import { styles } from "./styles";


type GuildsProps = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: GuildsProps){
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
    },{
      id: '3',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '4',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: true
    },{
      id: '5',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '6',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: true
    },{
      id: '7',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '8',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: true
    },
  ];

  return(
    <View style={styles.container}>
      <FlatList data={guilds}
        keyExtractor={item => item.id }
        renderItem={({ item }) => (
          <Guild 
            data={item} 
            onPress={() => handleGuildSelect(item)}
        />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        ListHeaderComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 128, paddingTop: 103 }}
        style={styles.guilds} />
    </View>
  )
}