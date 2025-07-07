const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

    shared: {
        ...shareAll({ singleton: true, strictVersion: false}),
        
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