migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sndvj5rvuy428r1")

  // remove
  collection.schema.removeField("v9sira5n")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sndvj5rvuy428r1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v9sira5n",
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
})
