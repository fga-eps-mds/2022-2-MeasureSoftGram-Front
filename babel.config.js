module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
          importSource: '@emotion/react'
        }
      }
    ]
  ],

  plugins: [['styled-components', { ssr: true }], '@emotion/babel-plugin']
};
