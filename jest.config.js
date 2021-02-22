module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coveragePathIgnorePatterns: ['index.js'],
    coverageDirectory: './coverage',
    moduleNameMapper: {
        '\\.(css)$': 'identity-obj-proxy',
    },
}
