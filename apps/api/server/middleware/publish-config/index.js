'use strict';

const config = require('config');

function createConfig() {
  const _config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    authPath: config.get('authPath'),
    baseUrl: config.get('api.baseUrl'),
  };
  return `window.config=${JSON.stringify(_config)}`;
}

module.exports = function configModdleware() {
  return (req, res, next) => {
    res.header('Content-Type', 'application/javascript');
    res.send(createConfig());
  };
};
