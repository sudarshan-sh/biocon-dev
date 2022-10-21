var config = {}

config.endpoint = 'https://cb4f2a0e-0ee0-4-231-b9ee.documents.azure.com:443/'
config.key = 'b6wkJXdAaWg6mCdzRl4DfjP1F3mm0doJ4jbmuwi7hBbqBqwoYqg0tLU2DJ0JweBGPRQX9v5JXEWm7fgHZfxsOw=='

config.database = {
  id: 'democosmos'
}

config.container = {
  id: 'Container1'
}

config.items = {
  detail1: {
    id: 'detail.1',
    Country: 'USA',
    partitionKey: 'USA',
    lastName: 'Sudarshan',
  },
  detail2: {
    id: 'detail.2',
    Country: 'USA',
    partitionKey: 'USA',
    lastName: 'Devansh',
  },
  detail3: {
    id: 'detail.3',
    Country: 'USA',
    partitionKey: 'USA',
    lastName: 'Sudarshan',
  },
}

module.exports = config
