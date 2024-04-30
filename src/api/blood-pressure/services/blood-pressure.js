'use strict';

/**
 * blood-pressure service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blood-pressure.blood-pressure');
