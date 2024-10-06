// Import the base configuration from wdio.conf.js
import { config } from '../wdio.conf.js';

// Override specific parameters for UAT environment
config.baseUrl = 'https://pronk.in/';

// Export the modified config
const _config = config;
export { _config as config };
