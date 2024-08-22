import React from "react";
import { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { DataContext } from "./ParentContext";

const PaymentForm = () => {
    const { Details, setDetails, Theme } = useContext(DataContext);
    const [CardNumber, setCardNumber] = useState(Details.cardNumber);
    const [ExpiryDate, setExpiryDate] = useState(Details.expiryDate);
    const [Cvv, setCvv] = useState(Details.cvv);

    const Next = () => {
        setDetails(...Details, CardNumber, ExpiryDate, Cvv);
        alert('Successful Submission')
    };

    return (
        <View style={[styles.container, { backgroundColor: Theme.backgroundColor }]}>
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="Card Number"
                placeholderTextColor={Theme.textColor}
                value={CardNumber}
                onChange={setCardNumber}
            />
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="Expiry Date (mm/yyyy)"
                placeholderTextColor={Theme.textColor}
                value={ExpiryDate}
                onChange={setExpiryDate}
            />
            <TextInput
                style={[styles.input, { color: Theme.textColor }]}
                placeholder="CVV number (e.g 123)"
                placeholderTextColor={Theme.textColor}
                value={Cvv}
                onChange={setCvv}
            />

            <TouchableOpacity style={{ padding: 10, margin: 10, borderRadius: 10, backgroundColor: Theme.backgroundColor }} onPress={Next}>
                <Text style={{ textAlign: "center", fontSize: 10, }}>
                    Complete Submission
                </Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: "gray", borderRadius: 10, },
    input: { borderWidth: 1, margin: 15, fontSize: 18, padding: 10, },
});

export default PaymentForm;