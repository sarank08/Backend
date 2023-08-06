migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd")

  // remove
  collection.schema.removeField("5lqrsmv6")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5lqrsmv6",
    "name": "lab_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "irvh1tw1htjk9zr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
