import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HomePage = ({navigation}) => {
    return(
        <View style={{marginTop: 30}}>
            <Text>
                Hi this is Home poage
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Todo')}>
                <Text>GO TO TODO APP</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Food')}>
                <Text>GO TO Food APP</Text>
            </TouchableOpacity>
        </View>
    );
} 

export default HomePage;