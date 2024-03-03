"use client";
import { PreferenceContext } from "@/provider";
import Link from "next/link";
import { useContext } from "react";

const SavedRestaurants = () => {
  const { savedRestaurants } = useContext(PreferenceContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="/restaurants" className="font-bold text-2xl">Home</Link>
      <div className="font-bold text-2xl">Saved Restaurants</div>
      <div className="flex flex-wrap justify-center">
        {savedRestaurants.map((restaurant, index) => (
          <div key={index} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>Rating: {restaurant.rating}</p>
            <p>Location: {restaurant.location}</p>
            <p>Distance: {restaurant.distance}km</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedRestaurants;
