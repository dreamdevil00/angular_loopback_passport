'use strict';

const config = require('config');

function createConfig() {
  const config = {
    nodeEnv: process.env.NODE_ENV || 'development',

  };
  return `window.config=${JSON.stringify(config)}`;
}

module.exports = function configModdleware() {
  return (req, res, next) => {
    res.header('Content-Type', 'application/javascript');
    res.send(createConfig());
  };
};
