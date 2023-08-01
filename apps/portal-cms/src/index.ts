"use strict";

module.exports = {
  register({ strapi }) {
    const extensionService = strapi.service("plugin::graphql.extension");

    const me = require("./extensions/graphql/queries/me");
    extensionService.use(({ strapi }) => (me({strapi})));
  },
};
