export { BarChartIcon, ChartIcon, DatasetIcon, HubIcon, TimelineIcon } from './charting/index.js';
export { MinusIcon, PauseIcon, PlusIcon, UploadFileIcon } from './controls/index.js';
export { CircleFilledIcon, CircleIcon, GroupFilledIcon, LinkIcon, MoonFilledIcon, MoonIcon, PersonFilledIcon, SunFilledIcon, SunIcon } from './indicators/index.js';
export { GitHubIcon, LinkedInIcon } from './logos/index.js';
export { CancelIcon, ChevronIcon, MenuIcon, RecenterIcon, SearchIcon, ZoomInIcon, ZoomOutIcon } from './navigation/index.js';
import { ReactElement, FC } from 'react';
import { IconProps } from '../../components/content/Icon/Icon.js';
import '../../types/styling.js';

declare const withVectorIcon: (WrappedSVG: FC) => (props: IconProps) => ReactElement;
declare const withImageIcon: (wrappedImage: string) => (props: IconProps) => ReactElement;

export { withImageIcon, withVectorIcon };
