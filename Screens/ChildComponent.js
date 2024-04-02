import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Child({ route }) {
    const { connectMethod, number } = route.params;

    return (
        <View style={styles.container}>

            <View style={styles.line} />
            <View style={styles.row}>
                <Text style={styles.label}>Connect Method</Text>
                <Text style={styles.value}>{connectMethod}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.row}>
                <Text style={styles.label}>Number</Text>
                <Text style={styles.value}>{number}</Text>
            </View>
            <View style={styles.line} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        padding: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    label: {
        fontWeight: 'bold',
        textAlign: 'right',
        flex: 1,
        marginRight: 10,
    },
    value: {
        flex: 1,
        textAlign: 'left',
    },
    line: {
        height: 1,
        width: '60%',
        backgroundColor: 'black',
        marginBottom: 10,
    },
});
