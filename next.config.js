module.exports = {
    images: {
        domains: ["links.papareact.com", "fakestoreapi.com"]
    },
    webpack: function (config, options) {
        config.experiments = {};
        return config;
    },
};