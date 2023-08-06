migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  collection.deleteRule = "@request.auth.id = @collection.users.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
