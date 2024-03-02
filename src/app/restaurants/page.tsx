"use client";

import { PreferenceContext } from "@/provider";
import { useContext, useEffect, useState } from "react";

const Restaurants = () => {
  const { cuisines, establishments, cost, distance } =
    useContext(PreferenceContext);
  const loc = "37.7749,-122.4194";
  const [apiUrl, setApiUrl] = useState<string>(
    `${process.env["NEXT_PUBLIC_API_END_POINT"]}location=${loc}&radius=${distance}&type=${process.env["NEXT_PUBLIC_TYPE"]}&key=${process.env["NEXT_PUBLIC_API_KEY"]}`
  );

  useEffect(() => {
    fetch(apiUrl).then((res) => console.log(res));
    console.log(apiUrl);
    console.log(cuisines, establishments, cost, distance);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen"></div>
  );
};

export default Restaurants;
