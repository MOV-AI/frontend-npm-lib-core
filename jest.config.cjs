/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "@swc/jest",
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
