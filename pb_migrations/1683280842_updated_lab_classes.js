migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd")

  collection.createRule = null

  return dao.saveCollection(collection)
})
