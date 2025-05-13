// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config = {
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^AppDir/(.*)$": "<rootDir>/src/AppDir/$1",
  },
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
  },
  testResultsProcessor: "jest-sonar-reporter",
  collectCoverage: true,
  maxWorkers: 4,
  testTimeout: 9000,
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/api/*",
    "/src/types/*.ts",
    "/src/styles/",
    "/src/icons/",
    "/src/Services/helper/*.ts",
    "/src/apolloConfigs/",
    "/src/.*style\\.(js|ts)",
    "^.*/style\\.js$",
    "^.*/styles\\.js$",
  ],
  modulePathIgnorePatterns: [
    "/src/styles/",
    "/src/icons/",
    "/src/apolloConfigs/",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
