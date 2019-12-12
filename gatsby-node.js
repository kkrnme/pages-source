"use strict"
require("ts-node").register(require("./tsconfig.json"))
exports.createPages = require("./src/utils/gatsby-node").createPages
