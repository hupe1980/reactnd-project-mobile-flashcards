import { StackNavigator } from 'react-navigation';

import AddDeck from '../screens/AddDeck';
import { primary, white } from '../utils/colors';


const AddDeckStackNavigator = StackNavigator({
  Main: {
    screen: AddDeck,
  },
}, {
  navigationOptions: {
    title: 'Add Deck',
    headerTintColor: white,
    headerStyle: {
      backgroundColor: primary,
    },
  },
});

export default AddDeckStackNavigator;
