migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w556kscqncdeme")

  collection.listRule = "@request.auth.id = @collection.student_theory_timetable.student_id.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2w556kscqncdeme")

  collection.listRule = null

  return dao.saveCollection(collection)
})
