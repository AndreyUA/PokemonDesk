import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import config from '../config/index';
import { getPokemonsAction, getPokemonsState } from '../store/pokemons';

export type TEndpoint = keyof typeof config.client.endpoint;

type TData<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | null;
};

const useData = <T>(endpoint: TEndpoint, query: object, deps: Array<any> = []): TData<T> => {
  // const [data, setData] = useState<T | null>(null);
  // const [isLoading, setIsloading] = useState<boolean>(true);
  // const [isError, setIsError] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsAction<T>(endpoint, query));
    // const getData = async (): Promise<void> => {
    //   setIsloading(true);
    //   try {
    //     const response = await req<T>(endpoint, query);
    //     setData(response);
    //   } catch (error) {
    //     setIsError(true);
    //   } finally {
    //     setIsloading(false);
    //   }
    // };

    // getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const { isLoading, data, error } = useSelector(getPokemonsState);

  return {
    isLoading,
    isError: error,
    // @ts-ignore
    data,
  };
};

export default useData;
