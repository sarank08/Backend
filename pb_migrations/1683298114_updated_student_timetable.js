migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w556kscqncdeme")

  collection.name = "student_theory_timetable"

  // remove
  collection.schema.removeField("c3w6kcjp")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w556kscqncdeme")

  collection.name = "student_timetable"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c3w6kcjp",
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

  return dao.saveCollection(collection)
})
