"use client";

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Math.random().toString(36).substr(2, 9), 
            name,
            quantity,
            category
        };
        onAddItem(newItem);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Item Name"
                    className="border rounded p-2 w-full"
                />
            </div>
            <div>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    min="1"
                    className="border rounded p-2 w-full"
                />
            </div>
            <div>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded p-2 w-full"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen-foods">Frozen Foods</option>
                    <option value="canned-goods">Canned Goods</option>
                    <option value="dry-goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">
                Add Item
            </button>
        </form>
    );
}
