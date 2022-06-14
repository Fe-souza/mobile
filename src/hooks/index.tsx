import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryResult } from 'react-query';
import { addData, getData } from 'services';

export function useGetData(
 collection:string,
): UseQueryResult {
  return useQuery(
    `${collection}List`,
    () => getData(collection),
  );
}


 export function useAddData(
  options?: UseMutationOptions<void, unknown, unknown>,
): UseMutationResult<void, unknown, unknown> {
  return useMutation<void, unknown, unknown>(
    data => addData(data),
    options,
  );
}