"use client";
import { RestaurantTinderBox } from "@/components";
import { PreferenceContext } from "@/provider";
import { DEMO_RESTAURANTS, RestaurantType } from "@/utils/datas";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Restaurants = () => {
  const {
    cuisines,
    establishments,
    cost,
    distance,
    savedRestaurants,
    setSavedRestaurants,
  } = useContext(PreferenceContext);
  const [recomedations, setRecomendations] =
    useState<RestaurantType[]>(DEMO_RESTAURANTS);
  const [viewing, setViewing] = useState<number>(0);

  useEffect(() => {
    const filtered = DEMO_RESTAURANTS.filter((restaurant) => {
      const cuisine = cuisines.includes(restaurant.cuisine);
      const establishment = establishments.some((item) =>
        restaurant.establishment.includes(item)
      );
      const dist = restaurant.distance <= distance;
      return cuisine && establishment && dist;
    });
    setRecomendations(filtered);
  }, [cuisines, establishments, cost, distance]);

  // useEffect(() => {
  //   const api = `${process.env["NEXT_PUBLIC_API_END_POINT"]}location=${loc}&radius=${distance}&type=${process.env["NEXT_PUBLIC_TYPE"]}&key=${process.env["NEXT_PUBLIC_API_KEY"]}`
  //   // fetch(api, {
  //   //   headers: {
  //   //     "Access-Control-Allow-Origin": "*",
  //   //     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  //   //     "Access-Control-Allow-Headers": "Content-Type",
  //   //   },
  //   // })
  //   //   .then((res) => console.log(res))
  //   //   .catch((error) => console.error(error));
  //   console.log(api);
  //   console.log(cuisines, establishments, cost, distance);
  // }, [cuisines, establishments, cost, distance]);
  console.log(savedRestaurants);

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <Link
        className="absolute font-bold text-xl z-20 top-4 right-4"
        href="/saved-restaurants"
      >
        My Restaurants
      </Link>
      {recomedations.map((restaurant, index) => (
        <RestaurantTinderBox
          key={index}
          restaurant={restaurant}
          viwewing={index == viewing}
          action={() => {
            setViewing(viewing + 1);
          }}
          onRight={() => {
            setSavedRestaurants([...savedRestaurants, restaurant]);
          }}
        />
      ))}
    </div>
  );
};

export default Restaurants;
