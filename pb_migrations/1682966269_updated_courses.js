migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdqd4g7tioacv0n")

  // remove
  collection.schema.removeField("fdb2xl1u")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdqd4g7tioacv0n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdb2xl1u",
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
})
