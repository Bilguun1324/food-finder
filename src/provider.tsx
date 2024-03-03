import { createContext, useState, Dispatch, SetStateAction } from "react";
import { RestaurantType } from "./utils/datas";

export const PreferenceContext = createContext<{
  cuisines: string[];
  setCuisines: Dispatch<SetStateAction<string[]>>;
  establishments: string[];
  setEstablishments: Dispatch<SetStateAction<string[]>>;
  cost: number;
  setCost: Dispatch<SetStateAction<number>>;
  distance: number;
  setDistance: Dispatch<SetStateAction<number>>;
  savedRestaurants: RestaurantType[];
  setSavedRestaurants: Dispatch<SetStateAction<RestaurantType[]>>;
}>({
  cuisines: [],
  setCuisines: () => {},
  establishments: [],
  setEstablishments: () => {},
  cost: 0,
  setCost: () => {},
  distance: 0,
  setDistance: () => {},
  savedRestaurants: [],
  setSavedRestaurants: () => {},
});

export const PreferenceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [establishments, setEstablishments] = useState<string[]>([]);
  const [cost, setCost] = useState<number>(10);
  const [distance, setDistance] = useState<number>(3);
  const [savedRestaurants, setSavedRestaurants] = useState<RestaurantType[]>(
    []
  );

  return (
    <PreferenceContext.Provider
      value={{
        cuisines,
        setCuisines,
        establishments,
        setEstablishments,
        cost,
        setCost,
        distance,
        setDistance,
        savedRestaurants,
        setSavedRestaurants,
      }}
    >
      {children}
    </PreferenceContext.Provider>
  );
};
