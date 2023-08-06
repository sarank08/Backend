migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdqd4g7tioacv0n")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6fdztosj",
    "name": "course_venue",
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
  const collection = dao.findCollectionByNameOrId("wdqd4g7tioacv0n")

  // remove
  collection.schema.removeField("6fdztosj")

  return dao.saveCollection(collection)
})
