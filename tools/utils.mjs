import path from 'path';

export const pathTo = (...args) => path.resolve(process.cwd(), ...args);
