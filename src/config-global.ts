import packageJson from '../package.json';

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string;
  appVersion: string;
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: 'BlockHaven',
  appVersion: packageJson.version,
};

// ----------------------------------------------------------------------

export const USER = {
  name: 'Ken Kong',
};

// ----------------------------------------------------------------------

export const API_ENDPOINT = 'https://api.binance.com';
export const API_KEY = '';
