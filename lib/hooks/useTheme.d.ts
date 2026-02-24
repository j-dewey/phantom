import { SetState } from '../types/index.js';
import { Theme } from '../types/styling.js';
import 'react';

declare const useTheme: (initialTheme?: Theme, serialize?: boolean) => [Theme, SetState<Theme>];

export { useTheme };
