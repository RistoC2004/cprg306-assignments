"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);

    const fetchMealIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];
        } catch (error) {
            console.error("Error fetching meal ideas:", error);
            setError("Unable to fetch meal ideas. Please try again later.");
            return [];
        }
    };

    const loadMealIdeas = async () => {
        setError(null); // Clear previous errors
        if (ingredient) {
            const fetchedMeals = await fetchMealIdeas(ingredient);
            setMeals(fetchedMeals);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Meal Ideas for "{ingredient}"</h2>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : meals.length > 0 ? (
                <ul className="space-y-2">
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="flex items-center space-x-4">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-12 h-12 rounded" />
                            <span className="font-semibold">{meal.strMeal}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No meal ideas found for this ingredient.</p>
            )}
        </div>
    );
}