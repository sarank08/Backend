migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  // remove
  collection.schema.removeField("qemyl1vn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1qk7sym7",
    "name": "slot",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qemyl1vn",
    "name": "slot",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "sndvj5rvuy428r1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("1qk7sym7")

  return dao.saveCollection(collection)
})
