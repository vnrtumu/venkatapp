import React from 'react';
import {View, Text, Button} from 'react-native';

const CartScreen = ({navigation}) => {
    return (
        <View>
            <Text>Welcome to Cart Page</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('home')}
            />
        </View>
    )
}

export default CartScreen;