module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(react-router-dom|react-router)/)"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy"
  }
};
