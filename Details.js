import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        width: '90%',
    },
    label: {
        fontWeight: 'bold',
        textAlign: 'left',
    },
    value: {
        textAlign: 'right',
    },
    card: {
        borderWidth: 1,
        padding: 10,
        borderColor: '#388E3C',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
        color: '#1B5E20'
    }
});

const formatDate = (dateString) => {
    if (!dateString) return "NA";

    const [month, day, year] = dateString.split("/");
    return `${day}-${month}-${year}`;
};

const Details = ({ route }) => {
    const { building } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{building.Project_Name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{ fontWeight: 'bold', color: '#2E7D32' }}>Reference No:</Text>
                    <Text>{building.Reference_No || "NA"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#2E7D32' }}>Postal Code:</Text>
                    <Text>{building.Postal_Code || "NA"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#2E7D32' }}>Rating:</Text>
                    <Text>{building.Rating || "NA"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#2E7D32' }}>Certification Date:</Text>
                    <Text>{building.Certification_Date || "NA"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#2E7D32' }}>Certificate Expiry Date:</Text>
                    <Text>{building.Certificate_Expiry_Date || "NA"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#2E7D32' }}>Project Type:</Text>
                    <Text>{building.Project_Type || "NA"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#2E7D32' }}>GFA (m²):</Text>
                    <Text>{building.GFA || "NA"}</Text>
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#2E7D32' }}>Green Mark Version:</Text>
                    <Text>{building.GM_Version || "NA"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#2E7D32' }}>Re-Certification:</Text>
                    <Text>{building.Re_Certification || "NA"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#2E7D32' }}>Previous GM Cert No:</Text>
                    <Text>{building.Previous_GM_Cert_Reference_No || "NA"}</Text>
                </View>
            </View>
        </View>
    );
};

export default Details;
