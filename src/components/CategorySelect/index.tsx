import React from 'react'
import { ScrollView } from 'react-native';

import { Category } from '../Category'

import { categories } from '../../utils/categories'

import { styles } from './styles';

type CategorySelectProps = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: CategorySelectProps) {
  return (
    <ScrollView style={styles.container} horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }} >
        { categories.map(c => (
          <Category key={c.id} 
            title={c.title}
            icon={c.icon}
            hasCheckBox={hasCheckBox}
            checked={c.id === categorySelected}
            onPress={() => setCategory(c.id) } />
        ) ) }
    </ScrollView>
  )
}