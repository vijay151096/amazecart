import React, {useMemo, useRef, useState} from 'react';
import FavoriteList from '../Components/Favorite/FavoriteList';
import {StyleSheet, Text, View} from 'react-native';

function Favorites() {
  return (
    <View style={styles.container}>
      <FavoriteList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorites;
