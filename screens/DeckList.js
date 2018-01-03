import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { Text, List, ListItem } from 'react-native-elements';

import { getDecks } from '../reducers';
import * as customPropTypes from '../utils/customPropTypes';

const propTypes = {
  decks: customPropTypes.decks.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

class DeckList extends Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {
    const { navigation } = this.props;
    const { id, title, cardCount } = item;

    return (
      <ListItem
        onPress={() => navigation.navigate('DeckDetail', { deckId: id, title })}
        title={title}
        subtitle={`${cardCount} Cards`}
      />
    );
  }

  render() {
    const { decks } = this.props;

    if (decks.length === 0) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text h4>No Decks!</Text>
        </View>
      );
    }

    return (
      <List containerStyle={{ flex: 1, marginTop: 0 }}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={({ id }) => id}
        />
      </List>
    );
  }
}

DeckList.navigationOptions = {
  title: 'List',
};

DeckList.propTypes = propTypes;

function mapStatToProps(state) {
  return {
    decks: getDecks(state),
  };
}

export default connect(mapStatToProps)(DeckList);
