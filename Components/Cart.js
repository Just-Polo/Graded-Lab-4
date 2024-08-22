import React from "react";
import { useContext } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { DataContext } from "./ParentContext";
import { MenuPage } from "./Menu";

const CartPage = () => {
    const { Cart, setCart, Theme, setTheme } = useContext(DataContext);

    const removeItem = (index) => {
        const newCart = [...Cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const confirmOrder = () => {
        setCart([]);
        alert('You have successfully made your order. Please be ready for collection soon.')
    };


    return (
        <View style={styles.container}>
            <FlatList
                data={Cart}
                renderItem={({ Item, index }) => (
                    <View style={styles.item}>
                        <Text>{Item.name}</Text>
                        <Text>R {Item.price}</Text>
                        <TouchableOpacity style={{ padding: 10, margin: 10, backgroundColor: Theme.backgroundColor, borderRadius: 10 }} onPress={() => removeItem(index)}>
                            <Text style={{ textAlign: "center", fontSize: 10, color: Theme.textColor }}>
                                Remove Item From Check Out
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity style={{ padding: 10, margin: 10, backgroundColor: Theme.backgroundColor, borderRadius: 10 }} onPress={confirmOrder}>
                <Text style={{ textAlign: "center", fontSize: 10, color: Theme.textColor }}>
                    Confirm Order
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, backgroundColor: "gray", borderRadius: 10 },
    item: { margin: 10, borderRadius: 10 }
});

export default CartPage;
