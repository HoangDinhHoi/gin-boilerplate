export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export * from './HOC';
export * from './hooks';
export * from './utils';
export * from './constants';
export * from './definitions';
export * from './components/atoms';
export * from './components/organism';
export * from './components/molecules';
