migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  // remove
  collection.schema.removeField("1qk7sym7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zgfwfamr",
    "name": "slot_id",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

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

  // remove
  collection.schema.removeField("zgfwfamr")

  return dao.saveCollection(collection)
})
