migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd")

  collection.deleteRule = "@request.auth.id = @collection.lab_classes.faculty_id.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
