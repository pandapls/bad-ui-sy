import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/order': [
        'warn',
        {
          'groups': [
            'builtin',    // Node.js内置模块
            'external',   // 第三方依赖
            'internal',   // 内部模块
            'parent',     // 父级目录模块
            'sibling',    // 同级目录模块
            'index'       // 当前目录模块
          ],
          'pathGroups': [
            {
              'pattern': './tokens',   // 让 ./tokens 导入排在最前面
              'group': 'internal',
              'position': 'before',
            },
          ],
          'pathGroupsExcludedImportTypes': ['builtin'], // 不影响内置模块排序
          'alphabetize': {
            'order': 'asc', // 按字母升序排序
            'caseInsensitive': true,
          },
          'newlines-between': 'always', // 分组之间添加空行
        },
      ],

      "storybook/default-exports": "off",
    },
  },
)
