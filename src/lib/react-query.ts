/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryClient, DefaultOptions, UseQueryOptions } from '@tanstack/react-query';
import { PromiseValue } from 'type-fest';

const queryConfig: DefaultOptions = {
	queries: {
		refetchOnWindowFocus: false,
		retry: false,
	},
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (page: any) => any> = PromiseValue<
	ReturnType<FnType>
>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
	UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
	'queryKey' | 'queryFn'
>;