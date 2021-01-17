import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Keyboard,
    ActivityIndicator
} from 'react-native';

//convert?q=USD_PHP&compact=ultra&apiKey=e557ddd9e8b1f4054098
import api from '../services/api';

export default class Conversor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            valueInput: 0,
            valueResultConverted: 0,
            loading: false
        };
        this.convert = this.convert.bind(this);
    }
    async convert() {
        if (this.state.valueInput === 0) {
            alert('Enter value valido')
        } else {
            this.setState({
                loading: true
            })
            let de_para = this.state.moedaA + '_' + this.state.moedaB;
            const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=e557ddd9e8b1f4054098`);
            let cotation = response.data[de_para];
            let result = cotation * parseFloat(this.state.valueInput);
            this.setState({
                valueResultConverted: result.toFixed(2),
                loading: false,
                valueInput:0
            })
            Keyboard.dismiss();
        }
    }
    render() {
        const { moedaA, moedaB } = this.props;
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator
                        color="#09A6FF"
                        size={50}
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.container}>

                    <Text style={styles.title}>
                        {moedaA} para {moedaB}
                    </Text>

                    <TextInput
                        placeholder="Enter value converted"
                        onChangeText={(valueInput) => this.setState({ valueInput })}
                        style={styles.input}
                        keyboardType="numeric"
                        underlineColorAndroid="transparent"
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => this.convert()}>
                        <Text style={styles.textBtn}>
                            Converted
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.valueConverted}>
                        {this.state.valueResultConverted == 0 ? '' : this.state.valueResultConverted}
                    </Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    input: {
        height: 45,
        width: 300,
        backgroundColor: '#CCC',
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 10,
        color: '#000',
        marginTop: 16
    },
    btn: {
        backgroundColor: '#F00',
        height: 45,
        width: 150,
        marginTop: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textBtn: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    valueConverted: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 15
    }
})