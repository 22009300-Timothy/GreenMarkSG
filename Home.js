import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 50,
        backgroundColor: '#FFFFFF',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#1B5E20'
    },
    searchBar: {
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderColor: '#388E3C',
    },
    listItem: {
        borderWidth: 1,
        borderColor: '#388E3C',
    },
    listText: {
        padding: 5,
    },
});

const App = () => {

    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [mySound, setMySound] = useState();

    const FilterData = (text) => {
        setSearch(text);
        if (text) {
            const newData = data.filter(item => item.Project_Name.toLowerCase().includes(text.toLowerCase()));
            setFilteredData(newData);
        } else {
            setFilteredData(data);
        }
    };

    async function playSound() {
        const soundfile = require("./pop.wav");
        const {sound} = await Audio.Sound.createAsync(soundfile);
        setMySound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return mySound
            ? () => {
                console.log('Unloading Sound');
                mySound.unloadAsync();
            }
            : undefined
    }, [mySound]);

    useEffect(() => {
        fetch("https://data.gov.sg/api/action/datastore_search?resource_id=d_c4bd082b48fa7611713f39e23d250c27")
            .then(response => response.json())
            .then(json => {
                const records = json.result.records;
                setData(records);
                setFilteredData(records);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.header}>GREEN-CERTIFIED BUILDINGS</Text>
            <TextInput
                style={styles.searchBar}
                placeholder={"Search..."}
                value={search}
                onChangeText={FilterData}
            />
            <FlatList
                data={filteredData}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        playSound()
                        navigation.navigate('Details', { building: item })}}
                    >
                        <View style={styles.listItem}>
                            <Text style={styles.listText}>{item.Project_Name || "No Name Available"}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default App;
