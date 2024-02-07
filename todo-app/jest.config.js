module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Map CSS modules and other static assets (adjust as necessary)
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
