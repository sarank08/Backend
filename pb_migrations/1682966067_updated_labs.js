migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irvh1tw1htjk9zr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jpszebki",
    "name": "lab_venue",
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
  const collection = dao.findCollectionByNameOrId("irvh1tw1htjk9zr")

  // remove
  collection.schema.removeField("jpszebki")

  return dao.saveCollection(collection)
})
