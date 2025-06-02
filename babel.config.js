module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo", // ✅ Keep this
      "@babel/preset-typescript", // ✅ Keep this if you're using TS
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./src",
            "@assets": "./assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
          },
          extensions: [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
        },
      ],
      "react-native-reanimated/plugin", // ✅ Must come last per Reanimated docs
      // Optional Babel proposals below:
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
      ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
      "@babel/plugin-transform-runtime",
      "transform-inline-environment-variables",
    ],
    env: {
      production: {
        plugins: ["transform-remove-console"],
      },
    },
  };
};
