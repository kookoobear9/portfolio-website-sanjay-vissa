module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/no-unknown-property': [
      'error',
      {
        ignore: [
          // Three.js/React Three Fiber properties
          'object',
          'args',
          'position',
          'position-y',
          'rotation',
          'rotation-y',
          'intensity',
          'groundColor',
          'angle',
          'penumbra',
          'castShadow',
          'receiveShadow',
          'shadow-mapSize',
          'polygonOffset',
          'polygonOffsetFactor',
          'flatShading',
          // React Tilt properties
          'options'
        ]
      }
    ],
  },
}