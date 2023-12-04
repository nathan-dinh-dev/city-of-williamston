'use strict';

/**
 * email-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-subscription.email-subscription');
