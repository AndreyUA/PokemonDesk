export interface IStateRequest<T> {
  isLoading: boolean;
  data: null | Array<T>;
  error: null | object;
}
