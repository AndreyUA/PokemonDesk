import { useState, useEffect } from 'react';

import req from '../utils/request';
import config from '../config/index';

type TEndpoint = keyof typeof config.client.endpoint;

interface IQuery {
  limit: number;
  name?: string;
}

const usePokemons = (param: TEndpoint, query: IQuery, setSearchValue: Array<string>) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await req(param);
        setData(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsloading(false);
      }
    };

    getPokemons();
  }, [param]);

  return {
    isLoading,
    isError,
    data,
  };
};

export default usePokemons;
