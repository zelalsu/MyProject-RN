module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    'react-native-paper/babel',

    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@assets': './assets',
        },
      },
    ],
  ],
};
