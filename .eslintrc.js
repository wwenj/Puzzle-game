// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential', 'airbnb-base'],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // check if imports actually resolve
    settings: {
        'import/resolver': {
            webpack: {
                config: 'build/webpack.base.conf.js'
            }
        }
    },
    // add your custom rules here
    rules: {
        "semi": [2, "always"],
        // allow indent for 4 whitespace
        'indent': ["error", 4],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // don't require .vue extension when importing
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never'
        }],
        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        // 'no-param-reassign': ['error', {
        //     props: true,
        //     ignorePropertyModificationsFor: [
        //         'state', // for vuex state
        //         'acc', // for reduce accumulators
        //         'e' // for e.returnvalue
        //     ]
        // }],
        // allow optionalDependencies
        'import/no-extraneous-dependencies': ['error', {
            optionalDependencies: ['test/unit/index.js']
        }],
        "no-unused-vars": ["error", {
            "vars": "all",
            "args": "none",
            "ignoreRestSiblings": false
        }],
        // "vue/script-indent": ["error", 4, {
        //     "baseIndent": 0
        // }],
        'no-console': 'off',
        'no-shadow': 'off',
        'no-plusplus': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'no-mixed-operators': 'off',
        'no-restricted-syntax': 'off',
        'comma-dangle': 'off',
        'no-new': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-dynamic-require': 'off',
        'no-use-before-define': 'off',
        'consistent-return': 'off',
        'no-unused-expressions': 'off',
        'max-len': 'off',
        'no-extra-boolean-cast': 'off',
        'global-require': 'off',
        'space-before-function-paren': 'off',
        'object-curly-spacing': 'off',
        'func-names': 'off',
        'guard-for-in': 'off',
        'no-useless-return': 'off',
        'import/no-named-as-default': 'off',
        'no-bitwise': 'off',
        'no-nested-ternary': 'off',
        'no-multi-assign': 'off',
        'no-multi-spaces': ["error", { ignoreEOLComments: true }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
