import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

// Component
const Head = () => {
    return (
        <View style={HeadStyle.content}>
            <Text style={HeadStyle.content.title}>Hola Jorge</Text>
            <Text style={HeadStyle.content.description}>¿Que les falta en casa?</Text>
        </View>
    )
}

const HeadStyle = StyleSheet.create({
    content: {
        backgroundColor: '#410FA3',
        height: 150,
        display: 'flex',
        width: '100%',
        textAlign: 'center',
        padding: 15,
        paddingTop: 60,
        title: {
            fontWeight: 'bold',
            fontSize: 30,
            color: '#fff',
        },
        description: {
            fontSize: 20,
            color: '#fff',
            marginTop: 10,
            fontWeight: 200
        }
    }
});

export default Head
