migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  collection.listRule = "@request.auth.id = @collection.theory_classes.teacher_id.id"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ujiv5sv",
    "name": "teacher_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  collection.listRule = null

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ujiv5sv",
    "name": "teacher_name",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
