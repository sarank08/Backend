migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ihhktagp",
    "name": "strength",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ihhktagp",
    "name": "class_strength",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100
    }
  }))

  return dao.saveCollection(collection)
})
