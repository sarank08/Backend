migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  // remove
  collection.schema.removeField("od7yciwd")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "od7yciwd",
    "name": "course_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wdqd4g7tioacv0n",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
