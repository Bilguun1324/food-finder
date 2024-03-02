"use client";
import { Cost, Cuisine, Distance, Establishment } from "@/components";
import { COST, CUISINE, DISTANCE, ESTABLISHMENT } from "@/utils/texts";
import React, { useState } from "react";

const ProfileCreation = () => {
  const [step, setStep] = useState(ESTABLISHMENT);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {step === ESTABLISHMENT && (
        <Establishment setStep={() => setStep(CUISINE)} />
      )}
      {step === CUISINE && <Cuisine setStep={() => setStep(COST)} />}
      {step === COST && <Cost setStep={() => setStep(DISTANCE)} />}
      {step === DISTANCE && <Distance />}
    </div>
  );
};

export default ProfileCreation;
