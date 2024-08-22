import React from "react";
import { useContext } from "react";
import { View, Text, Button, Stylesheet, FlatList, TouchableOpacity } from "react-native";
import { DataContext, } from "./ParentContext";


const MenuPage = () => {
    const { Cart, setCart, Theme, } = useContext(DataContext);

    const Food = [
        { id: 1, name: 'Hotdogs', price: 30 },
        { id: 2, name: 'Fries', price: 20 },
        { id: 3, name: 'Pies', price: 35 },
        { id: 1, name: 'Burgers', price: 40 },
        { id: 1, name: 'Pizza', price: 35 },
    ];

    const addToCart = (Items) => {
        setCart([...Cart, Items]);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={Food}
                renderItem={({ Items }) => (
                    <View style={styles.item}>
                        <Text>{Items.name}</Text>
                        <Text>{Items.price}</Text>
                        <TouchableOpacity style={{ padding: 10, margin: 10, backgroundColor: Theme.backgroundColor, borderRadius: 10 }} onPress={() => addToCart(Items)}>
                            <Text style={{ textAlign: "center", fontSize: 10, color: Theme.textColor }}>
                                Add To Cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
                }
            />
        </View>
    );
};


const styles = Stylesheet.create({
    container: { flex: 1, padding: 10, backgroundColor: "gray", borderRadius: 10 },
    item: { margin: 10, borderRadius: 10 }

});

export default MenuPage;