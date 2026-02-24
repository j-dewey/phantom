import { Callback } from '../types/index.js';
import 'react';
import '../types/styling.js';

declare const fetchAsync: <T, U>(base: string, path: string, method: "GET" | "POST", headers: Headers, body: (U | null) | undefined, successCallback: Callback<T>, failureCallback: Callback<Error>, json?: boolean) => Promise<void>;
declare const getAsync: <T>(base: string, path: string, headers: Headers, successCallback: Callback<T>, failureCallback: Callback<Error>, json?: boolean) => Promise<void>;
declare const postAsync: <T, U>(base: string, path: string, headers: Headers, body: U, successCallback: Callback<T>, failureCallback: Callback<Error>, json?: boolean) => Promise<void>;
declare const genericSuccessCallback: Callback<unknown>;
declare const genericFailureCallback: Callback<Error>;

export { fetchAsync, genericFailureCallback, genericSuccessCallback, getAsync, postAsync };
