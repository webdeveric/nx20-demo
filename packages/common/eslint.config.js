import baseConfig from '../../eslint.config.js';
import parser from 'jsonc-eslint-parser';

/** @type { import("eslint").Linter.Config[] } */
export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [
            '{projectRoot}/eslint.config.{js,cjs,mjs}',
            '{projectRoot}/vitest.config.mts',
          ],
        },
      ],
    },
    languageOptions: {
      parser,
    },
  },
];
