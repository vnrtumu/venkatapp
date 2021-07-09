import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

import Task from '../components/Tasks';



const HomeScreen = ({navigation}) => {
    const [task, setTask ] = useState();
    const [taskItems, setTaskItems ] = useState([]);


    const handleAddTask = () =>{
        setTaskItems([...taskItems, task]);
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }
    return ( 
        <View style={styles.mainContainer}>
            {/* Todys tasks */}

            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's Tasks</Text>

                <View style={styles.items}>
                    {/* This is where  the taks will go! */}
                    {
                        taskItems.map((item, index)=>{
                            return (
                                <TouchableOpacity key={index}  onPress={()=>completeTask(index)}>
                                    <Task key={index} text={item} />
                                </TouchableOpacity>
                            )
                        })
                    }
                   
                </View>

            </View>

            {/* Write a task */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTasksWrapper}
            >
                <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text=> setTask(text)} />
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20
    },
    sectionTitle:{
        fontSize: 20,
    },
    items: {
        marginTop: 20
    },
    writeTasksWrapper:{
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        width: 250,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addText:{}
   
});

export default HomeScreen;

