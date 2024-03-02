"use client";
import { CUISINES, ESTABLISHMENTS } from "@/utils/datas";
import Box from "./box";
import { useState, useContext } from "react";
import Link from "next/link";
import { PreferenceContext } from "@/provider";

type ProfileCreationType = {
  setStep: () => void;
};

export const Establishment = ({ setStep }: ProfileCreationType) => {
  const { setEstablishments } = useContext(PreferenceContext);
  const [selectedEstablishments, setSelectedEstablishments] = useState<
    string[]
  >([]);

  const handleSelected = (establishment: string) => {
    if (selectedEstablishments.includes(establishment)) {
      setSelectedEstablishments(
        selectedEstablishments.filter((selected) => selected !== establishment)
      );
    } else {
      setSelectedEstablishments([...selectedEstablishments, establishment]);
    }
  };

  const handleNext = () => {
    setEstablishments(selectedEstablishments);
    setStep && setStep();
  };

  return (
    <div className="full-screen flex flex-col items-center justify-evenly">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        What kind of foods do you like?
      </h1>
      <div className="md:w-7/12 w-9/12 flex flex-wrap justify-center">
        {ESTABLISHMENTS.map((establishment, index) => {
          return (
            <Box
              key={index}
              name={establishment}
              selected={selectedEstablishments.includes(establishment)}
              onClick={() => handleSelected(establishment)}
            />
          );
        })}
      </div>
      <div
        onClick={() => handleNext()}
        className="cursor-pointer text-2xl font-bold"
      >
        Next
      </div>
    </div>
  );
};

export const Cuisine = ({ setStep }: ProfileCreationType) => {
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const { setCuisines } = useContext(PreferenceContext);

  const handleSelected = (establishment: string) => {
    if (selectedCuisines.includes(establishment)) {
      setSelectedCuisines(
        selectedCuisines.filter((selected) => selected !== establishment)
      );
    } else {
      setSelectedCuisines([...selectedCuisines, establishment]);
    }
  };

  const handleNext = () => {
    setCuisines(selectedCuisines);
    setStep && setStep();
  };

  return (
    <div className="full-screen flex flex-col items-center justify-evenly">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Select your favorite cuisines
      </h1>
      <div className="md:w-7/12 w-9/12 h-1/2 overflow-auto flex flex-wrap justify-center">
        {CUISINES.map((cuisine, index) => {
          return (
            <Box
              key={index}
              name={cuisine}
              selected={selectedCuisines.includes(cuisine)}
              onClick={() => handleSelected(cuisine)}
            />
          );
        })}
      </div>
      <div
        onClick={() => handleNext()}
        className="cursor-pointer text-2xl font-bold"
      >
        Next
      </div>
    </div>
  );
};

export const Cost = ({ setStep }: ProfileCreationType) => {
  const { setCost } = useContext(PreferenceContext);
  const [range, setRange] = useState<number>(10);

  const handleNext = () => {
    setCost(range);
    setStep && setStep();
  };

  return (
    <div className="full-screen flex flex-col items-center justify-evenly">
      <h1 className="text-2xl text-center md:text-4xl font-bold mb-4">
        What's the maximum cost you're willing to pay?
      </h1>
      <div className="flex gap-4 h-24 center w-9/12 md:w-1/2 bg-primary relative rounded-2xl px-4">
        <div className="text-white font-bold text-xl">1$</div>
        <input
          type="range"
          min={1}
          max={1000}
          value={range}
          className="w-3/4 h-1 center rounded-xl appearance-none focus:outline-none"
          onChange={(e) => setRange(Number(e.target.value))}
        />
        <div className="absolute text-white top-2 font-bold text-xl">
          {range}$
        </div>
        <div className="text-white font-bold text-xl">1000$</div>
      </div>
      <div
        onClick={() => handleNext()}
        className="cursor-pointer text-2xl font-bold"
      >
        Next
      </div>
    </div>
  );
};

export const Distance = () => {
  const { setDistance } = useContext(PreferenceContext);
  const [range, setRange] = useState<number>(3);

  const handleNext = () => {
    setDistance(range);
  };

  return (
    <div className="full-screen flex flex-col items-center justify-evenly">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        What is the maximum distance you're willing to travel?
      </h1>
      <div className="flex gap-4 h-24 center w-9/12 md:w-1/2 bg-primary relative rounded-2xl px-4">
        <div className="text-white font-bold text-xl">1km</div>
        <input
          type="range"
          min={1}
          max={20}
          value={range}
          className="w-3/4 h-1 center rounded-xl appearance-none focus:outline-none"
          onChange={(e) => setRange(Number(e.target.value))}
        />
        <div className="absolute text-white top-2 font-bold text-xl">
          {range}km
        </div>
        <div className="text-white font-bold text-xl">10km</div>
      </div>
      <Link
        href="/restaurants"
        className="cursor-pointer text-2xl font-bold"
        onClick={() => handleNext()}
      >
        Next
      </Link>
    </div>
  );
};
