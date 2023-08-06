migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aqwn2y3bi8c8ipp")

  // remove
  collection.schema.removeField("1jbhwcrj")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aqwn2y3bi8c8ipp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1jbhwcrj",
    "name": "strength",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100
    }
  }))

  return dao.saveCollection(collection)
})
