import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from "react-query";
import { addData, getData, InterfaceExample } from "services";

export function useGetData(collection: string): UseQueryResult {
  return useQuery(`${collection}List`, () => getData(collection));
}

//UseMutationOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>
//UseMutationResult<TData = unknown, TError = unknown, TVariables = unknown, TContext = unknown>
//useMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>

//as 3 interface seguem a mesma  assinatura,
//1 TData: o primeiro parâmetro é o tipo de dado que será  (boolean)
//2 TError: o tipo do erro, caso ocorra. aqui como não tem tratamento deixa (unknown)
//3 TVariables: o tipo do dado que a mutation vai receber (InterfaceExample) e repassar para a função (addData, que recebe um InterfaceExample)

//A mutation já faz o tratamento assíncrono, por isso ela sempre espera uma função
// que retorna uma Promise, e extrai o valor de dentro da promise, nesse caso um boolean

export function useAddData(
  options?: UseMutationOptions<boolean, unknown, InterfaceExample>
): UseMutationResult<boolean, unknown, InterfaceExample> {
  return useMutation<boolean, unknown, InterfaceExample>(
    (data) => addData(data),
    options
  );
}
