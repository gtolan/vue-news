"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_NEWS_API: '"26cc3b2be92d47d2a974591e7a973790"'
});
