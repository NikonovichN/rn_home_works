module.exports = {
  presets: [
    "module:metro-react-native-babel-preset", 
    ["@babel/preset-env", {"targets": {"node": "current"}}],
    "@babel/preset-typescript",
  ],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        "root": ["."],
        "extensions": [".ios.js", ".android.js", ".ios.ts", ".android.ts", ".js", ".ts", ".tsx", ".json"],
        "alias": {
          "@styles": "./src/core/styles",
          "@components": "./src/components",
          "@icons": "./src/assets/icons",
          "@pages": "./src/pages",
          "@selectors": "./src/core/selectors",
          "@hooks": "./src/core/hooks",
          "@actions": "./src/core/actions",
          "@navigation": ["./src/core/navigation"],
          "@network": "./src/core/network",
          "@utils": ["./src/core/utils"],
          "@constants": ["./src/core/constants"],
          "@entities": ["./src/core/entities"],
          "@analytics": ["./src/core/analytics"]
        }
      }
    ]
  ]
}
