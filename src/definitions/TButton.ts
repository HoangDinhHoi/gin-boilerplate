export type TButtonVoid = () => void;

export type TButtonAny<T> = (value: T) => void;

export type TButtonDouble<T, K> = (t: T, k: K) => void;

export type TButtonNotRequired<T> = (value?: T) => void;
