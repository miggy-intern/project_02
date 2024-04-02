import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function Child({ route }) {
    const { connectMethod, number } = route.params;

    const handleSavePress = () => {
        Alert.alert(
            'Save',
            `Connect Method: ${connectMethod}\nNumber: ${number}`,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.borderOutline}>
                <View style={styles.row}>
                    <Text style={[styles.label, styles.centerAlign]}>Club Connection</Text>
                </View>

                <View style={styles.line} />
                <View style={styles.row}>
                    <Text style={[styles.label, styles.leftAlign]}>Connect Method</Text>
                    <Text style={[styles.value, styles.rightAlign]}>{connectMethod}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.row}>
                    <Text style={[styles.label, styles.leftAlign]}>Number</Text>
                    <Text style={[styles.value, styles.rightAlign]}>{number}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.button}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleSavePress}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 50,
        paddingTop: 20,
        paddingBottom: 10,
    },
    borderOutline: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'black',
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
        marginRight: 10,
        paddingBottom: 5,
        color: 'black',
    },
    value: {
        flex: 1,
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: 'black',
        marginBottom: 10,
    },
    leftAlign: {
        textAlign: 'left',
        paddingLeft: 20
    },
    rightAlign: {
        textAlign: 'right',
        paddingRight: 20
    },
    centerAlign: {
        textAlign: 'center',
        paddingTop: 6
    },
    button: {
        alignItems: 'center',
        paddingBottom: 200,

    },
    buttonContainer: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#bdbebf',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16, // Adjust font size as needed
    },
});
