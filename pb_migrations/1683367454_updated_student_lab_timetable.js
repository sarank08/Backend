migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aqwn2y3bi8c8ipp")

  // remove
  collection.schema.removeField("iyju9rgy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jziltw1n",
    "name": "lab_class_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "68kf9vy1c383gdd",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cdbumb7e",
    "name": "student_id",
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
  const collection = dao.findCollectionByNameOrId("aqwn2y3bi8c8ipp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iyju9rgy",
    "name": "lab_slot_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qoqm0h93h3uag3f",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("jziltw1n")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cdbumb7e",
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
})
