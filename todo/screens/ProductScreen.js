import React from 'react';
import {View, Text, Button} from 'react-native';

const ProductScreen = ({navigation}) => {
    return (
        <View>
            <Text>Welcome to Product Page</Text>
            <Button
                title="Go to Cart"
                onPress={() => navigation.navigate('cart')}
            />
        </View>
    )
}

export default ProductScreen;