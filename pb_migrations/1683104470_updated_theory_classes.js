migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  collection.listRule = "@request.auth.id = @collection.theory_classes.teacher_name.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1")

  collection.listRule = null

  return dao.saveCollection(collection)
})
