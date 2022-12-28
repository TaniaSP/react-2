import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'jsdom',
    verbose: true,
    modulePathIgnorePatterns:["<rootDir>/src/services"],
    moduleNameMapper: {
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/mocks/filemock.js",
        "\\.(css|less)$": "<rootDir>/src/mocks/filemock.js"
    }
};

export default config;