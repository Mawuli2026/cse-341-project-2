const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');

// Load the Swagger JSON file
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'swagger.json'), 'utf8')
);

// Export serve and setup functions
module.exports = {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerDocument, {
    customSiteTitle: 'CSE 341 Project 2 API Docs',
    explorer: true
  })
};
