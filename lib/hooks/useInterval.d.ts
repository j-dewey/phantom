import { Callback } from '../types/index.js';
import 'react';
import '../types/styling.js';

declare const useInterval: (callback: Callback<void>, delay: number | null) => void;

export { useInterval };
