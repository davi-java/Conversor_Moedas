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
                    underlineColorAndroid="transparent"
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
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        color:'#000'
    },
    input:{
        height: 45,
        width: 300,
        backgroundColor:'#CCC',
        textAlign:'center',
        fontSize: 20,
        borderRadius:10,
        color:'#000',
        marginTop: 16
    },
    btn:{
        backgroundColor:'#F00',
        height:45,
        width: 150,
        marginTop: 15,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    textBtn:{
        fontSize: 20,
        color:'#fff',
        fontWeight:'bold',
        fontStyle:'italic'
    },
    valueConverted:{
        fontSize: 30,
        fontWeight:'bold',
        color:'#000000',
        marginTop: 15
    }
})