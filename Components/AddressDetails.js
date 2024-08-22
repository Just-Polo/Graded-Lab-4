import React from "react";
import { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { DataContext } from "./ParentContext";

const AddressForm = ({ navigation }) => {
    const { Details, setDetails, Theme } = useContext(DataContext);
    const [address, setAddress] = useState(Details.address);
    const [city, setCity] = useState(Details.city);
    const [state, setState] = useState(Details.state);
    const [zip, setZip] = useState(Details.zip);

    const Next = () => {
        setDetails(...Details, address, city, country);
        navigation.navigate('CardDetails');
    };

    return (
        <View style={[styles.container, { backgroundColor: Theme.backgroundColor }]}>
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="Address"
                placeholderTextColor={Theme.textColor}
                value={address}
                onChange={setAddress}
            />
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="City"
                placeholderTextColor={Theme.textColor}
                value={city}
                onChange={setCity}
            />
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="State"
                placeholderTextColor={Theme.textColor}
                value={state}
                onChange={setState}
            />
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="Zip Code"
                placeholderTextColor={Theme.textColor}
                value={zip}
                onChange={setZip}
            />

            <TouchableOpacity style={{ padding: 10, margin: 10, borderRadius: 10, backgroundColor: Theme.backgroundColor }} onPress={Next}>
                <Text style={{ textAlign: "center", fontSize: 10, }}>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: "gray", borderRadius: 10, },
    input: { borderWidth: 1, margin: 15, fontSize: 18, padding: 10, },
});

export default AddressForm;