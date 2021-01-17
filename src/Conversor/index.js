import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class Conversor extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>
                    USD para BRL
                </Text>

                <TextInput
                    placeholder="Enter value converted"
                    onChangeText={() => { }}
                    style={styles.input}
                    keyboardType="numeric"
                />
                
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>
                        Converted
                    </Text>
                </TouchableOpacity>

                <Text style={styles.valueConverted}>
                    10.09
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    }
})