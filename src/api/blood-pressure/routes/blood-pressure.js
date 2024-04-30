'use strict';

/**
 * blood-pressure router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blood-pressure.blood-pressure');
