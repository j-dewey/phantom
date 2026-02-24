import { ReactElement } from 'react';
export { getKeyByValue, range, sumArray } from './arrays.js';
export { formatNumericDate, formatReadableDate } from './dates.js';
export { fetchAsync, genericFailureCallback, genericSuccessCallback, getAsync, postAsync } from './fetch.js';
export { decimalPlaces, formatLargeValue, formatNumber, ordinalSuffix } from './numbers.js';
export { loadImageDimensions, parseBool, parseNullableObject, parseNullableString, parsePrimitive, pxToInt } from './parse.js';
export { capitalizeFirstLetter } from './strings.js';
import '../types/index.js';
import '../types/styling.js';

declare const validateElement: (type: string, element?: ReactElement<unknown>, required?: boolean) => void;
declare const scrollToId: (id: string, offset?: number) => void;
declare const orUndefined: <T>(condition: boolean | undefined, result: T) => T | undefined;

export { orUndefined, scrollToId, validateElement };
