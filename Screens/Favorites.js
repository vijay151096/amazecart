import React, {useMemo, useRef, useState} from 'react';
import FavoriteList from '../Components/Favorite/FavoriteList';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import FavoriteBsDetails from '../Components/Favorite/FavoriteBSDetails';

function Favorites() {
  const bottomSheetDetails = useRef(null);
  const [product, setProduct] = useState(null);
  const snapPoints = useMemo(() => ['1%', '60%'], []);

  const bottomSheetHandler = product => {
    bottomSheetDetails.current.snapToIndex(1);
    setProduct(product);
  };

  return (
    <View style={styles.container}>
      <FavoriteList bottomSheetHandler={bottomSheetHandler} />
      <BottomSheet
        ref={bottomSheetDetails}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={BottomSheetBackdrop}>
        <BottomSheetView visible={false}>
          {product && <FavoriteBsDetails item={product} />}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorites;
