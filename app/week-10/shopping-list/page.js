"use client";

import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const loadItems = async () => {
        if (user) {
            const userItems = await getItems(user.uid);
            setItems(userItems);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    const handleAddItem = async (newItem) => {
        if (user) {
            const id = await addItem(user.uid, newItem);
            setItems((prevItems) => [...prevItems, { id, ...newItem }]);
        }
    };

    const handleItemSelect = (name) => {
        const cleanName = name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '').trim();
        setSelectedItemName(cleanName);
    };

    if (!user) {
        return <p className="text-center">Please log in to view the shopping list.</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Shopping List</h1>
            <div className="flex space-x-6">
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2">
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                </div>
            </div>
        </div>
    );
}
