// Import the base configuration from wdio.conf.js
const { config } = require('../wdio.conf.js');

// Override specific parameters for UAT environment
config.baseUrl = 'https://pronk.in/';

// Export the modified config
module.exports.config = config;
