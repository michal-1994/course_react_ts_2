/** @format */

import { createContext, ReactNode } from "react";

export interface Timer {
  name: string;
  duration: number;
}

export interface TimersState {
  isRunning: boolean;
  timers: Timer[];
}

export type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export interface TimersContextProviderProps {
  children: ReactNode;
}

const TimersContextProvider = ({ children }: TimersContextProviderProps) => {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer: (timerData: Timer) => {},
    startTimers: () => {},
    stopTimers: () => {},
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimersContextProvider;
