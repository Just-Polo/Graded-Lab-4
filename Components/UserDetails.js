import React from "react";
import { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { DataContext } from "./ParentContext";

const DetailsForm = ({ navigation }) => {
    const { Details, setDetails, Theme } = useContext(DataContext);
    const [name, setName] = useState(Details.name);
    const [surname, setSurname] = useState(Details.surname);
    const [email, setEmail] = useState(Details.email);
    const [contact, setContact] = useState(Details.contact);

    const Next = () => {
        setDetails(...Details, name, surname, email, contact);
        navigation.navigate('AddressDetails');
    };

    return (
        <View style={[styles.container, { backgroundColor: Theme.backgroundColor }]}>
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="Name"
                placeholderTextColor={Theme.textColor}
                value={name}
                onChange={setName}
            />
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="Surname"
                placeholderTextColor={Theme.textColor}
                value={surname}
                onChange={setSurname}
            />
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="Email"
                placeholderTextColor={Theme.textColor}
                value={email}
                onChange={setEmail}
            />
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="Contact"
                placeholderTextColor={Theme.textColor}
                value={contact}
                onChange={setContact}
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

export default DetailsForm;