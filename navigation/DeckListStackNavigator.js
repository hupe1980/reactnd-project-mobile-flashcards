import { StackNavigator } from 'react-navigation';

import DeckList from '../screens/DeckList';
import DeckDetail from '../screens/DeckDetail';
import AddCard from '../screens/AddCard';
import Quiz from '../screens/Quiz';
import { primary, white } from '../utils/colors';

const DeckListStackNavigator = StackNavigator({
  Main: { screen: DeckList },
  DeckDetail: { screen: DeckDetail },
  AddCard: { screen: AddCard },
  Quiz: { screen: Quiz },
}, {
  navigationOptions: {
    headerTintColor: white,
    headerStyle: {
      backgroundColor: primary,
    },
  },
});

export default DeckListStackNavigator;
