"use client";

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
    });

    return (
        <div>
            <div className="flex justify-center space-x-4 my-4">
                <button
                    className={`px-4 py-2 font-semibold text-white rounded ${
                        sortBy === 'name' ? 'bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`px-4 py-2 font-semibold text-white rounded ${
                        sortBy === 'category' ? 'bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>

            <ul className="grid grid-cols-1 gap-4">
                {sortedItems.map((item) => (
                    <li
                        key={item.id}
                        className="border p-4 rounded shadow-md bg-white flex justify-between items-center"
                    >
                        <span className="font-semibold">{item.name}</span>
                        <span className="text-gray-600">Qty: {item.quantity}</span>
                        <span className="text-blue-500 italic">{item.category}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
