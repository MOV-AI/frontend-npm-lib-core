/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)?$": "ts-jest",
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
