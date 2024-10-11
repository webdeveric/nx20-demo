const nx = require('@nx/eslint-plugin');

module.exports = [
  // @ts-expect-error @nx/eslint-plugin doesn't have types
  ...nx.configs['flat/base'],
  // @ts-expect-error @nx/eslint-plugin doesn't have types
  ...nx.configs['flat/typescript'],
  // @ts-expect-error @nx/eslint-plugin doesn't have types
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
