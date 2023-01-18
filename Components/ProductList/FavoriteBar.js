import { Pressable, StyleSheet, Text, View} from 'react-native';
import {useContext, useState, useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {FavoriteContext} from "../../Store/FavoriteContextProvider";
import {color} from "../../Styles/Color";

const FavoriteBar = ({item, size}) => {

    const {addProductToFavorite, favoriteProducts} = useContext(FavoriteContext);
    const {id} = item;
    const handlePress = () => {
        addProductToFavorite(item.id);
        setIsFavourite(prevState => !prevState);
    };


    // let favoriteProduct = favoriteProducts.find((productId) => productId === id)
    // const [isFavourite, setIsFavourite] = useState(!!favoriteProduct);

    const [isFavourite, setIsFavourite] = useState(false);
    useEffect(() => {
        let favoriteProduct = favoriteProducts.find((productId) => productId === id)
        if (favoriteProduct) {
            setIsFavourite(true)
        }
    }, []);


    return (
        <Pressable onPress={handlePress}>
            {isFavourite ? (
                <View style={styles.shadowContainer} >
                    <Octicons name="feed-heart" size={size} color={'red'}/>
                </View>
            ) : (
                <AntDesign name="heart" size={size} color={'grey'}/>
            )}
        </Pressable>
    );
};
const styles = StyleSheet.create({
    shadowContainer:{
        borderRadius: 20,
        elevation: 5,
        shadowColor: color.red,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        backgroundColor: 'white',
    },
})

export default FavoriteBar;
