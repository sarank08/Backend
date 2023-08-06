migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w556kscqncdeme")

  collection.listRule = "student_id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w556kscqncdeme")

  collection.listRule = null

  return dao.saveCollection(collection)
})
