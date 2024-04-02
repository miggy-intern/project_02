import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function ParentComponent({ navigation }) {
    const [connectMethod, setConnectMethod] = useState('');
    const [number, setNumber] = useState('');

    const handlePress = () => {
        console.log(connectMethod)
        console.log(number)
        navigation.navigate("Child", { connectMethod, number });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setConnectMethod}
                value={connectMethod}
                placeholder="Enter a Connect Method"
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={setNumber}
                value={number}
                placeholder="Enter a Number"
                keyboardType="numeric"
            />

            <Button
                title="Submit"
                onPress={handlePress}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});
