import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    ignores: [
      'dist',
      'node_modules',
      'tsconfig.json',
      'tailwind.config.ts',
      'postcss.config.mjs',
      'public/**',
      'src/assets/**',
      'src/components/ui/**',
      'vite.config.ts',
      'postcss.config.mjs'
    ],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript + React override
  {
    files: ['**/*.{js,jsx,ts,tsx}'],

    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      parser: tseslint.parser,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      prettier,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugin,
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      /* ========= JS rules ========= */
      'constructor-super': 'warn',
      'no-empty-pattern': 'warn',
      'no-sparse-arrays': 'warn',
      'use-isnan': 'warn',
      camelcase: 'warn',
      'default-case': 'warn',
      'no-unneeded-ternary': 'warn',
      'valid-typeof': 'error',
      'no-cond-assign': 'error',
      'no-setter-return': 'error',
      'no-unsafe-finally': 'error',
      'no-useless-escape': 'off',

      /* ========= TS rules ========= */
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',

      /* ========= React ========= */
      'react/react-in-jsx-scope': 'off',
      ...reactHooks.configs.recommended.rules,

      /* ========= Prettier ========= */
      'prettier/prettier': 'warn',
    },
  },
]
