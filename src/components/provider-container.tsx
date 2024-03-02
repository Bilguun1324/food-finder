"use client";

import { PreferenceProvider } from "@/provider";

export const ProviderContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <PreferenceProvider>{children}</PreferenceProvider>;
};
