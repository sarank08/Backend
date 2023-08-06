migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irvh1tw1htjk9zr")

  // remove
  collection.schema.removeField("pvtcgzap")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("irvh1tw1htjk9zr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pvtcgzap",
    "name": "lab_slot",
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
