const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: "mfe1",
    filename: "remoteEntry.js",
    exposes: {
        './FlightsModule': './src/app/flights/flights.module.ts',
        './TestModule': './src/app/test/test.module.ts',
        './AppModule': './src/app/app.module.ts'
    },
    shared: {
        ...shareAll({ singleton: true, strictVersion: false }),
        
        // Explicitly share the library services as singletons
        'shared-lib': {
            singleton: true,
            strictVersion: false,
            requiredVersion: false
        },
        'auth-lib': {
            singleton: true,
            strictVersion: false,
            requiredVersion: false
        }
    },
});
