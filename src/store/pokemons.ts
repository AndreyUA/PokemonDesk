/* eslint-disable no-console */
import { Dispatch } from 'react';

import { IStateRequest } from '../interface';
import { IPokemons, TTypesRequest } from '../interface/pokemons';
import req from '../utils/request';
import { IInitialState } from './createRootReducer';
import { TEndpoint } from '../hook/useData';

// eslint-disable-next-line no-shadow
export enum PokemonActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',

  FETCH_POKEMONS = 'FETCH_POKEMONS',
  FETCH_POKEMONS_RESOLVE = 'FETCH_POKEMONS_RESOLVE',
  FETCH_POKEMONS_REJECT = 'FETCH_POKEMONS_REJECT',
  FETCH_POKEMONS_FINISH = 'FETCH_POKEMONS_FINISH',
}

interface TypesAction {
  type: PokemonActionTypes;
  payload?: Array<string>;
}

interface PokemonAction<T> {
  type: PokemonActionTypes;
  payload?: {
    isLoading?: boolean;
    data?: T | null;
    error?: any;
  };
}

type ActionTypes = TypesAction;

type ActionPokemonTypes<T> = PokemonAction<T>;

export interface IPokemonsInitialState {
  types: IStateRequest<string>;
  pokemons: {
    isLoading: boolean;
    data: null | IPokemons;
    error?: any;
  };
}

const initialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
  pokemons: {
    isLoading: false,
    data: null,
    error: null,
  },
};

// Reducer
const pokemons = (state = initialState, action: ActionTypes) => {
  const { type, payload } = action;
  switch (type) {
    case PokemonActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: payload,
          error: null,
        },
      };
    case PokemonActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: payload,
        },
      };
    case PokemonActionTypes.FETCH_POKEMONS:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          isLoading: true,
        },
      };
    case PokemonActionTypes.FETCH_POKEMONS_RESOLVE:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          data: payload,
        },
      };
    case PokemonActionTypes.FETCH_POKEMONS_REJECT:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          error: payload,
        },
      };
    case PokemonActionTypes.FETCH_POKEMONS_FINISH:
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          isLoading: false,
        },
      };
    default:
      return state;
  }
};

// Selectors
export const getPokemonsTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonsTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;

export const getPokemonsState = (state: IInitialState) => state.pokemons.pokemons;

// Actions
export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonActionTypes.FETCH_TYPES });
    try {
      const response = await req<TTypesRequest>('getPokemonTypes', {});

      dispatch({
        type: PokemonActionTypes.FETCH_TYPES_RESOLVE,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PokemonActionTypes.FETCH_TYPES_REJECT,
        payload: error,
      });
    }
  };
};

export const getPokemonsAction = <T>(endpoint: TEndpoint, query: object) => {
  return async (dispatch: Dispatch<ActionPokemonTypes<T>>) => {
    dispatch({ type: PokemonActionTypes.FETCH_POKEMONS });
    try {
      const response = await req<T>(endpoint, query);

      dispatch({
        type: PokemonActionTypes.FETCH_POKEMONS_RESOLVE,
        payload: response,
      });
    } catch (error) {
      dispatch({
        type: PokemonActionTypes.FETCH_POKEMONS_REJECT,
        payload: error,
      });
    } finally {
      dispatch({
        type: PokemonActionTypes.FETCH_POKEMONS_FINISH,
      });
    }
  };
};

export default pokemons;
