import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import img1 from '../../images/01.png';

const styles = StyleSheet.create({
    Sugest: {
        color: "#fff"
    },
    Container: {
        backgroundColor: "#1e222b",
        height: 130
    },
    mainView: {
        flexDirection: 'row'
    },
    suggestionsPhoto: {
        marginRight: 21
    }
})

const Suggestions = () => {
    return (
        <ScrollView horizontal contentContainerStyle={{ alignItems: 'center', paddingLeft: 16 }} style={styles.Container}>
            <View style={styles.mainView}>
                <TouchableOpacity style={styles.suggestionsPhoto}>
                    <Image source={img1} />
                    <Text style={styles.Sugest}>Doações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.suggestionsPhoto}>
                    <Image source={img1} />
                    <Text style={styles.Sugest}>Doações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.suggestionsPhoto}>
                    <Image source={img1} />
                    <Text style={styles.Sugest}>Doações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.suggestionsPhoto}>
                    <Image source={img1} />
                    <Text style={styles.Sugest}>Doações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.suggestionsPhoto}>
                    <Image source={img1} />
                    <Text style={styles.Sugest}>Doações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.suggestionsPhoto}>
                    <Image source={img1} />
                    <Text style={styles.Sugest}>Doações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.suggestionsPhoto}>
                    <Image source={img1} />
                    <Text style={styles.Sugest}>Doações</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Suggestions;


