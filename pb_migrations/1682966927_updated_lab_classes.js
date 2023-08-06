migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bdyqjsnz",
    "name": "lab_strenght",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": 100
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd")

  // remove
  collection.schema.removeField("bdyqjsnz")

  return dao.saveCollection(collection)
})
