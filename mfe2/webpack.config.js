const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: "mfe2",
    filename: "remoteEntry.js",
    exposes: {
        './FlightsModule': './src/app/flights/flights.module.ts',
        './TestModule': './src/app/test/test.module.ts',
        './AppModule': './src/app/app.module.ts'
    },
    shared: {
        ...shareAll({
            singleton: false,
            strictVersion: false,
            requiredVersion: 'auto'
        }),
        'shared-lib': {
            singleton: true,
            strictVersion: true,
            requiredVersion: '0.0.1'
        },
        'auth-lib': {
            singleton: true,
            strictVersion: true,
            requiredVersion: '0.0.1'
        }
    },
});
