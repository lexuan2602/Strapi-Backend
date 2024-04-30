'use strict';

/**
 * blood-pressure controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blood-pressure.blood-pressure');
