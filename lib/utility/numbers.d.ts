declare const ordinalSuffix: (input: number | string) => string;
declare const formatNumber: (input: number) => string;
declare const decimalPlaces: (value: number, places?: number) => number;
declare const formatLargeValue: (value: number) => string;

export { decimalPlaces, formatLargeValue, formatNumber, ordinalSuffix };
