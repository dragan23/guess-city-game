import capitalCitiesData from "../../assets/capitalCities.json";

import {
  SET_END_OF_ROUND,
  SET_GAME_IN_PROGRESS,
  RESET_GAME,
  START_NEXT_ROUND,
  SET_STATUS_MESSAGE,
  SET_SHOW_MARKER,
  SET_REMAINING_DISTANCE,
  SET_PLACED_CITIES_COUNTER,
  SET_CURRENT_POSITION,
  SET_DISTANCE_BETWEEN_POSITIONS,
} from ".";

const shuffle = (arr) => arr[Math.floor(Math.random() * arr.length)];

const { capitalCities } = capitalCitiesData;

const initialState = {
  gameInProgress: true,
  placedCitiesCounter: 0,
  remainingDistance: 1500,
  basePosition: shuffle(capitalCities),
  currentPosition: null,
  distanceBetweenPositions: null,
  showMarker: false,
  endOfRound: false,
  statusMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_END_OF_ROUND:
      return {
        ...state,
        endOfRound: action.payload,
      };
    case SET_GAME_IN_PROGRESS:
      return {
        ...state,
        gameInProgress: action.payload,
      };
    case SET_CURRENT_POSITION:
      return {
        ...state,
        currentPosition: action.payload,
      };
    case SET_STATUS_MESSAGE:
      return {
        ...state,
        statusMessage: action.payload,
      };
    case SET_PLACED_CITIES_COUNTER:
      return {
        ...state,
        placedCitiesCounter: state.placedCitiesCounter + 1,
      };
    case SET_SHOW_MARKER:
      return {
        ...state,
        showMarker: action.payload,
      };
    case SET_DISTANCE_BETWEEN_POSITIONS:
      return {
        ...state,
        distanceBetweenPositions: action.payload,
      };
    case SET_REMAINING_DISTANCE:
      const distance =
        state.remainingDistance - state.distanceBetweenPositions < 0
          ? 0
          : state.remainingDistance - state.distanceBetweenPositions;
      return {
        ...state,
        remainingDistance: distance,
      };
    case START_NEXT_ROUND:
      return {
        ...state,
        showMarker: false,
        currentPosition: null,
        distanceBetweenPositions: null,
        basePosition: shuffle(capitalCities),
        endOfRound: false,
        statusMessage: "",
      };
    case RESET_GAME:
      return {
        ...state,
        gameInProgress: true,
        basePosition: shuffle(capitalCities),
        placedCitiesCounter: 0,
        remainingDistance: 1500,
        currentPosition: null,
        distanceBetweenPositions: null,
        showMarker: false,
        endOfRound: false,
        statusMessage: "",
      };

    default:
      return initialState;
  }
};

export { reducer, initialState };
