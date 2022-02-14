import { createContext, useReducer, useMemo, useContext } from "react";
import { reducer, initialState } from "./reducer";
import {
  SET_END_OF_ROUND,
  RESET_GAME,
  START_NEXT_ROUND,
  SET_STATUS_MESSAGE,
  SET_SHOW_MARKER,
  SET_REMAINING_DISTANCE,
  SET_PLACED_CITIES_COUNTER,
  SET_CURRENT_POSITION,
  SET_DISTANCE_BETWEEN_POSITIONS,
  SET_GAME_IN_PROGRESS,
} from ".";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => [state, dispatch], [state, dispatch]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

const useGameContext = () => {
  const [state, dispatch] = useContext(GameContext);

  const resetGame = () => {
    dispatch({ type: RESET_GAME });
  };

  const startNextRound = () => {
    dispatch({ type: START_NEXT_ROUND });
  };

  const setGameInProgress = (value) => {
    dispatch({ type: SET_GAME_IN_PROGRESS, payload: value });
  };

  const setEndOfRound = (value) => {
    dispatch({ type: SET_END_OF_ROUND, payload: value });
  };

  const setCurrentPosition = (value) => {
    dispatch({ type: SET_CURRENT_POSITION, payload: value });
  };

  const setStatusMessage = (message) => {
    dispatch({ type: SET_STATUS_MESSAGE, payload: message });
  };

  const setShowMarker = (value) => {
    dispatch({ type: SET_SHOW_MARKER, payload: value });
  };

  const setRemainingDistance = () => {
    dispatch({ type: SET_REMAINING_DISTANCE });
  };

  const setDistanceBetweenPositions = (value) => {
    dispatch({ type: SET_DISTANCE_BETWEEN_POSITIONS, payload: value });
  };

  const setPlacedCitiesCounter = () => {
    dispatch({ type: SET_PLACED_CITIES_COUNTER });
  };

  return {
    state,
    dispatch,
    resetGame,
    startNextRound,
    setPlacedCitiesCounter,
    setStatusMessage,
    setRemainingDistance,
    setShowMarker,
    setGameInProgress,
    setEndOfRound,
    setDistanceBetweenPositions,
    setCurrentPosition,
  };
};

export { useGameContext, GameProvider };
