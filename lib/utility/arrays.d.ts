declare const getKeyByValue: (object: Record<string, unknown>, value: unknown) => string | undefined;
declare const sumArray: <T>(array: T[], property?: keyof T, from?: number, to?: number) => number;
declare const range: (range: number) => number[];

export { getKeyByValue, range, sumArray };
