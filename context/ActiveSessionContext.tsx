"use client";
import React, { useState, createContext, useContext } from "react";
import { SectionName } from "@/lib/types";

type ActiveSessionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSessionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSessionContext =
  createContext<ActiveSessionContextType | null>(null);

export function useActiveSessionContext() {
  const context = useContext(ActiveSessionContext);
  if (!context) {
    throw new Error(
      "useActiveSessionContext must be used within an ActiveSessionContextProvider"
    );
  }
  return context;
}

export default function ActiveSessionContextProvider({
  children,
}: ActiveSessionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

  return (
    <ActiveSessionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSessionContext.Provider>
  );
}
