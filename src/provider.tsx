import { createContext, useState, Dispatch, SetStateAction } from "react";

export const PreferenceContext = createContext<{
  cuisines: string[];
  setCuisines: Dispatch<SetStateAction<string[]>>;
  establishments: string[];
  setEstablishments: Dispatch<SetStateAction<string[]>>;
  cost: number;
  setCost: Dispatch<SetStateAction<number>>;
  distance: number;
  setDistance: Dispatch<SetStateAction<number>>;
}>({
  cuisines: [],
  setCuisines: () => {},
  establishments: [],
  setEstablishments: () => {},
  cost: 0,
  setCost: () => {},
  distance: 0,
  setDistance: () => {},
});

export const PreferenceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  let [cuisines, setCuisines] = useState<string[]>([]);
  let [establishments, setEstablishments] = useState<string[]>([]);
  let [cost, setCost] = useState<number>(10);
  let [distance, setDistance] = useState<number>(3);

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
      }}
    >
      {children}
    </PreferenceContext.Provider>
  );
};
