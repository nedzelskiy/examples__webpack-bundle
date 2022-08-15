export const isInteger = (value: unknown): boolean => {
  if (typeof value !== 'number') {
    return false;
  }
  return (value ^ 0) === value;
}

export const isDate = (value: unknown): boolean => {
  return value instanceof Date && typeof value.getTime === 'function';
}

export const isMap = (value: unknown): boolean => {
  return typeof value === 'object' && value instanceof Map;
}

export const isSet = (value: unknown): boolean => {
  return typeof value === 'object' && value instanceof Set;
}

export const isFunction = (value: unknown): boolean => {
  return typeof value === 'function';
}

export const isArray = (value: unknown): boolean => {
  return Array.isArray(value);
}

export const isObject = (value: unknown): boolean => {
  return !!value
    && typeof value === 'object'
    && !isDate(value)
    && !isMap(value)
    && !isSet(value)
    && !isFunction(value)
    && !Array.isArray(value);
}