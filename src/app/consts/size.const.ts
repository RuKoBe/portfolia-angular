export const BASE_SIZE = 8;
export const BASE_FONT_SIZE = 16;

export const N_BASE_SIZE = (n: number): number => BASE_SIZE * n;

export const N_BASE_SIZE_IN_PX = (n: number): string => `${N_BASE_SIZE(n)}px`;