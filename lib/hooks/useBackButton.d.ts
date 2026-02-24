import { Callback } from '../types/index.js';
import 'react';
import '../types/styling.js';

declare const useBackButton: (callback: Callback<void>) => boolean;

export { useBackButton };
