import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Navigation from '../types/Navigation';
import {Text, TouchableOpacity} from 'react-native';

interface EditButtonProps {
  navigateTo?: string;
}

export function HeaderRightButton({navigateTo}: EditButtonProps) {
  const navigation = useNavigation<Navigation>();
  return (
    <TouchableOpacity
      onPress={() => {
        if (navigateTo) {
          navigation.navigate(navigateTo);
        }
      }}>
      <Text>Example!</Text>
    </TouchableOpacity>
  );
}
