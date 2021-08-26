module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          hooks: './src/hooks',
          i18n: './src/i18n',
          navigator: './src/navigator',
          redux: './src/redux',
          screens: './src/screens',
          utils: './src/utils',
        },
      },
    ],
  ],
};
