import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import PromotionLabel from '../Core/PromotionLabel';
import ProductImage from '../ProductList/ProductImage';
import Octicons from 'react-native-vector-icons/Octicons';
import {lightColor} from '../../Styles/LightColor';
import Entypo from 'react-native-vector-icons/Entypo';

function ImageSection({image}) {
  const images = [image, image, image, image];

  const [activeState, setActiveState] = useState(0);

  const getImage = (img, index) => (
    <Image
      key={index}
      source={{uri: img}}
      style={{
        height: 150,
        width: 200,
        resizeMode: 'contain',
      }}
    />
  );

  const handleScroll = event => {
    const newValue = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    if (newValue < images.length) {
      setActiveState(newValue);
    }
  };

  return (
    <View style={styles.imageOuterContainer}>
      <View
        style={styles.marginLabel}
        testID={'ImageSection-promotionContainer'}>
        <PromotionLabel style={styles.labelPadding} />
      </View>
      <View style={styles.marginImage} testID="ImageSection-imageContainer">
        <View
          style={[
            styles.rippleStyle,
            {padding: 30, justifyContent: 'center', alignItems: 'center'},
          ]}>
          <View
            style={[
              styles.rippleStyle,
              {justifyContent: 'center', alignItems: 'center'},
            ]}>
            <ScrollView
              horizontal
              style={styles.scrollStyle}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={16}
              onScroll={handleScroll}>
              {images.map((img, index) => getImage(img, index))}
            </ScrollView>
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                bottom: -15,
                alignSelf: 'center',
              }}>
              {images.map((img, index) => (
                <View
                  key={index}
                  style={[
                    styles.paginationIcon,
                    activeState === index ? styles.paginationActiveIcon : null,
                  ]}></View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    height: 300,
    width: 200,
    borderRadius: 50,
  },
  paginationIcon: {
    padding: 3,
    backgroundColor: 'grey',
    borderRadius: 100,
    marginHorizontal: 4,
  },
  paginationActiveIcon: {
    backgroundColor: lightColor.lightBlue,
    paddingHorizontal: 6,
    borderRadius: 100,
  },
  imageOuterContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rippleStyle: {
    padding: 20,
    borderRadius: 200,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: lightColor.gold,
  },
  marginImage: {
    flex: 8,
    height: 250,
    width: 300,
    marginVertical: 15,
  },
  iconsStyling: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginLabel: {
    flex: 1,
    marginTop: 35,
  },
  innerContainerStyle: {
    padding: 14,
  },
  imageStyle: {
    height: 150,
    width: 150,
  },

  labelPadding: {
    padding: 5,
  },
});

export default ImageSection;
