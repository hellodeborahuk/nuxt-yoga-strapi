'use strict';

/**
 * site-setting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-setting.site-setting');
