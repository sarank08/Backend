migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sndvj5rvuy428r1")

  collection.indexes = [
    "CREATE INDEX `idx_UMOSh6i` ON `theory_slots` (\n  `course_id`,\n  `slot`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sndvj5rvuy428r1")

  collection.indexes = []

  return dao.saveCollection(collection)
})
