import { Callback, Primitive, NullablePrimitive, MultiCallback } from '../types/index.js';
import 'react';
import '../types/styling.js';

interface UseQueryParamsInterface {
    readQueryParam: (param: string) => NullablePrimitive;
    readAllQueryParams: () => Record<string, Primitive>;
    setQueryParam: MultiCallback<string, string | null, boolean | undefined>;
    onUpdate?: Callback<Record<string, Primitive>>;
}
declare const useQueryParams: (whitelist?: string[], onUpdate?: Callback<Record<string, Primitive>>) => UseQueryParamsInterface;

export { useQueryParams };
