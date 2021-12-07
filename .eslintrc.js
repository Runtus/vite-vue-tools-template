module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        // vue3.2语法目前貌似还不支持，先不设置
        // 'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: [
        // "vue",
        '@typescript-eslint',
        'prettier',
    ],
    rules: {
        // "semi": ["warn"]
        'prettier/prettier': ['warn'],
    },
};
