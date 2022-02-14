import React from "react";
import styles from "./Score.module.css";
import { useGameContext } from "../../context/GameProvider";

const Score = () => {
  const {
    state: {
      placedCitiesCounter,
      remainingDistance,
      basePosition: { capitalCity },
      gameInProgress,
    },
  } = useGameContext();

  return (
    <div className={styles.score}>
      <div className={styles.card}>
        {placedCitiesCounter === 1
          ? `${placedCitiesCounter} city placed`
          : `${placedCitiesCounter} cities placed`}
      </div>
      <div className={styles.card}>
        {remainingDistance === 1
          ? `${remainingDistance} kilometer left`
          : `${remainingDistance} kilometers left`}
      </div>
      <div>
        {gameInProgress ? (
          <p>Select the location of {`"${capitalCity}"`}</p>
        ) : (
          <p>Start a new game!</p>
        )}
      </div>
    </div>
  );
};

export default Score;
