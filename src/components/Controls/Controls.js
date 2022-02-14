import { useEffect } from "react";
import styles from "./Controls.module.css";
import { useGameContext } from "../../context/GameProvider";

const Controls = () => {
  const {
    state: {
      endOfRound,
      currentPosition,
      statusMessage,
      gameInProgress,
      remainingDistance,
      distanceBetweenPositions,
    },
    resetGame,
    startNextRound,
    setStatusMessage,
    setShowMarker,
    setRemainingDistance,
    setGameInProgress,
    setEndOfRound,
    setPlacedCitiesCounter,
  } = useGameContext();

  useEffect(() => {
    if (remainingDistance <= 0) setGameInProgress(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingDistance]);

  const handlePlaceMarker = () => {
    const maxDistance = 50;

    if (!currentPosition) {
      setStatusMessage("Add a pin to the map!!!");
      return;
    }

    setShowMarker(true);
    setRemainingDistance();

    if (distanceBetweenPositions <= maxDistance) {
      setPlacedCitiesCounter();
      setStatusMessage("You got it!!!");
    } else {
      setStatusMessage("Wroooong!");
    }
    setEndOfRound(true);
  };

  return (
    <div className={styles.controls}>
      {!gameInProgress && (
        <button className={styles.btn} onClick={resetGame}>
          NEW GAME
        </button>
      )}
      {gameInProgress && !endOfRound && (
        <button className={styles.btn} onClick={handlePlaceMarker}>
          PLACE
        </button>
      )}
      {endOfRound && gameInProgress && (
        <button className={styles.btn} onClick={startNextRound}>
          NEXT ROUND
        </button>
      )}
      <p className={styles.statusMessage}>{statusMessage}</p>
    </div>
  );
};

export default Controls;
