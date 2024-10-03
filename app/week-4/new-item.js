"use client";

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item quantity: ${quantity}`);
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-center h-screen bg-black">
      <div className="p-4 bg-white rounded-md shadow-md flex items-center space-x-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className="w-10 h-10 flex items-center justify-center bg-gray-300 text-white rounded-full disabled:opacity-50"
        >
          -
        </button>
        <span className="text-2xl font-bold">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full disabled:opacity-50"
        >
          +
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
