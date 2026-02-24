import { Callback } from '../types/index.js';
import { RefObject } from 'react';
import '../types/styling.js';

declare const useOutsideClick: (ref: RefObject<HTMLElement>, callback: Callback<void>) => void;

export { useOutsideClick };
