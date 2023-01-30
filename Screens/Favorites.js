import React, {useMemo, useRef, useState} from 'react';
import FavoriteList from '../Components/Favorite/FavoriteList';
import {StyleSheet, Text, View} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import FavoriteBsDetails from '../Components/Favorite/FavoriteBSDetails';

function Favorites() {
  const bottomSheetDetails = useRef(null);
  const [product, setProduct] = useState(null);
  const snapPoints = useMemo(() => ['40%', '80%'], []);

  const [showBSDetails, setShowBSDetails] = useState(false);
  const bottomSheetHandler = product => {
    setShowBSDetails(prevState => !prevState);
    setProduct(product);
  };

  return (
    <View style={styles.container}>
      <FavoriteList bottomSheetHandler={bottomSheetHandler} />
      {showBSDetails && (
        <BottomSheet ref={bottomSheetDetails} snapPoints={snapPoints}>
          <BottomSheetView>
            {product && <FavoriteBsDetails item={product} />}
          </BottomSheetView>
        </BottomSheet>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favorites;
