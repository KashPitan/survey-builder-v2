module.exports = {
  presets: ['next/babel'],
  plugins: [
    'twin',
    'macros',
    [
      'styled-components',
      {
        // "ssr": true,
        displayName: false,
        fileName: false,
      },
    ],
  ],
};
