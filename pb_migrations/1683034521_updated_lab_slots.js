migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qoqm0h93h3uag3f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wuh1ttdb",
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
  const collection = dao.findCollectionByNameOrId("qoqm0h93h3uag3f")

  // remove
  collection.schema.removeField("wuh1ttdb")

  return dao.saveCollection(collection)
})
