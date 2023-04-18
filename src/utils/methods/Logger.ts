const Logger = {
  debug: (...arg: unknown[]) => {
    if (__DEV__) {
      console.debug(new Date().toISOString(), 'Logger DEBUG', ...arg);
    }
  },
  info: (...arg: unknown[]) => {
    if (__DEV__) {
      console.info(new Date().toISOString(), 'Logger INFO', ...arg);
    }
  },
  warn: (...arg: unknown[]) => {
    if (__DEV__) {
      console.warn(new Date().toISOString(), 'Logger WARN', ...arg);
    }
  },
  error: (...arg: unknown[]) => {
    if (__DEV__) {
      console.error(new Date().toISOString(), 'Logger ERROR', ...arg);
    }
  },
};

export default Logger;
