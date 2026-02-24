import { LoadedImage } from '../types/index.js';
import 'react';
import '../types/styling.js';

declare const parseBool: (input: string | null, defaultValue?: boolean) => boolean;
declare const parseNullableString: (input: string | null, allowEmpty?: boolean) => string | null;
declare const parseNullableObject: <T>(input: string | null) => T | null;
declare const parsePrimitive: (input: string | null) => boolean | number | string | null;
declare const loadImageDimensions: (source: string) => Promise<LoadedImage>;
declare const pxToInt: (property: string) => number;

export { loadImageDimensions, parseBool, parseNullableObject, parseNullableString, parsePrimitive, pxToInt };
