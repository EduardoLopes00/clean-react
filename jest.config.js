module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx",
    "!src/**/_app.spec.tsx",
    "!src/**/_document.spec.tsx",
    "!**/*.d.ts",
  ],
  coverageReporters: ["lcov", "json"],
  modulePaths: ["<rootDir>/"],
};
