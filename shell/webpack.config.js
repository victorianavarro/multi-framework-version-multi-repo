const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

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