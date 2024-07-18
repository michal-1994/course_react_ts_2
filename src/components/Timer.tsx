/** @format */

import { useState } from "react";
import { type Timer as TimerProps } from "../store/timers-context.tsx";
import Container from "./UI/Container.tsx";

export default function Timer({ name, duration }: TimerProps) {
  const [remainingState, setRemainingState] = useState(duration * 1000);

  setInterval(function () {
    setRemainingState((prevTime) => prevTime - 50);
  }, 50);

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingState} />
      </p>
      <p>{duration}</p>
    </Container>
  );
}
