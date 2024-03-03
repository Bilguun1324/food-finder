"use client";
import { RestaurantType } from "@/utils/datas";
import TinderCard from "react-tinder-card";

type RestaurantTinderBoxProps = {
  restaurant: RestaurantType;
  viwewing: boolean;
  onRight?: () => void;
  action?: () => void;
};

export const RestaurantTinderBox = ({
  restaurant,
  onRight,
  viwewing,
  action,
}: RestaurantTinderBoxProps) => {
  const { name, distance, rating, image, location } = restaurant;
  return (
    <TinderCard
      className={`absolute full-screen center flex-col ${
        viwewing && "z-10"
      } bg-white font-bold`}
      onSwipe={(dir) => {
        if (dir === "right") {
          onRight && onRight();
        }
        action && action();
      }}
    >
      <img src={image} alt={name} className="full-screen-image" />
      <div className="restaurant-details">
        <h2>{name}</h2>
        <p>Rating: {rating}</p>
        <p>Location: {location}</p>
        <p>Distance: {distance}km</p>
      </div>
    </TinderCard>
  );
};
