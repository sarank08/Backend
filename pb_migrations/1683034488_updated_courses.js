migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdqd4g7tioacv0n")

  collection.name = "theory"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wdqd4g7tioacv0n")

  collection.name = "courses"

  return dao.saveCollection(collection)
})
