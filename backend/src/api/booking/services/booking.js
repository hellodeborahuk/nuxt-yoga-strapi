'use strict';

/**
 * booking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::booking.booking');
