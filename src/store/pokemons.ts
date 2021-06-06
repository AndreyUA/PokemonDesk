/* eslint-disable no-console */
import { Dispatch } from 'react';

import { IStateRequest } from '../interface';
import { TTypesRequest } from '../interface/pokemons';
import req from '../utils/request';
import { IInitialState } from './createRootReducer';

// eslint-disable-next-line no-shadow
export enum PokemonActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

interface TypesAction {
  type: PokemonActionTypes;
  payload?: Array<string>;
}

type ActionTypes = TypesAction;

export interface IPokemonsInitialState {
  types: IStateRequest<string>;
}

const initialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

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
    default:
      return state;
  }
};

export const getPokemonsTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonsTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonActionTypes.FETCH_TYPES });
    try {
      const response = await req<TTypesRequest>('getPokemonTypes', {});
      console.log(response);

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

export default pokemons;
