import React from "react";
import { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { DataContext } from "./ParentContext";

const ProfilePage = () => {
    const { Details, Theme, setTheme } = useContext(DataContext);

    const ThemeChange = (textColor, backgroundColor) => {
        setTheme({ textColor, backgroundColor })
    };

    return (
        <View style={[styles.container, { backgroundColor: Theme.backgroundColor }]}>
            <Text style={{ color: Theme.textColor }} >Name - {Details.name} </Text>
            <Text style={{ color: Theme.textColor }} >Surname - {Details.surname} </Text>
            <Text style={{ color: Theme.textColor }} >Email - {Details.email} </Text>
            <Text style={{ color: Theme.textColor }} >Contact - {Details.contact} </Text>
            <Text style={{ color: Theme.textColor }} >Address - {Details.address} </Text>

            <TouchableOpacity style={{ padding: 10, margin: 10, borderRadius: 10 }} onPress={() => ThemeChange('white', 'orange')}>
                <Text style={{ textAlign: "center", fontSize: 10, }}>
                    Dark Mode
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 10, margin: 10, borderRadius: 10 }} onPress={() => ThemeChange('orange', 'white')}>
                <Text style={{ textAlign: "center", fontSize: 10, }}>
                    Light Mode
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: "gray", borderRadius: 10 }
});

export default ProfilePage;