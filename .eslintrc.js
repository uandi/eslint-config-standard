module.exports = {
    extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
    },
    env: {
        browser: true,
        node: true,
        jquery: true,
    },
    plugins: [
        'html',
        'prettier'
    ],
    rules: {
        'no-debugger': 1,
        'no-alert': 1,
        'no-console': 1,
        'no-plusplus': 0,
        'no-unused-vars': [
            1,
            {
                ignoreSiblings: true,
                argsIgnorePattern: 'res|next|^err',
            },
        ],
        'no-param-reassign': [
            2,
            {
                props: false,
            },
        ],
        'prefer-const': [
            2,
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            }
        ],
        'arrow-body-style': [
            1,
            'as-needed',
            {
                requireReturnForObjectLiteral: false,
            },
        ],
        'no-shadow': [
            2,
            {
                hoist: 'all',
                allow: [
                    'resolve',
                    'reject',
                    'done',
                    'next',
                    'err',
                    'error',
                ],
            },
        ],
        'prettier/prettier': [
            2,
            {
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'es5',
                printWidth: 120,
            },
        ],
    },
};
