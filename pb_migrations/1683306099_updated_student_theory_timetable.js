migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w556kscqncdeme")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w556kscqncdeme")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
