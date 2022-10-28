const { CosmosClient } = require("@azure/cosmos");
const { container } = require("../config");
const config = require("../config");

const endpoint = config.endpoint;
const key = config.key;
const client = new CosmosClient({ endpoint, key });

module.exports = client