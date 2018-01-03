import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import DeckListStackNavigator from './DeckListStackNavigator';
import AddDeckStackNavigator from './AddDeckStackNavigator';
import { primary, white } from '../utils/colors';

// eslint-disable-next-line react/prop-types
const TabBarIcon = ({ name, color }) => <Ionicons name={name} size={30} color={color} />;

const RootNavigation = TabNavigator(
  {
    DeckList: {
      screen: DeckListStackNavigator,
      navigationOptions: {
        tabBarLabel: 'List',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => <TabBarIcon name="ios-list-box" color={tintColor} />,
      },
    },
    AddDeck: {
      screen: AddDeckStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ tintColor }) => <TabBarIcon name="ios-add-circle" color={tintColor} />,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? primary : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : primary,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  },
);

export default RootNavigation;
