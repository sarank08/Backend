migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_qNBneOM` ON `lab_classes` (\n  `lab_slot_id`,\n  `faculty_id`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd")

  collection.indexes = []

  return dao.saveCollection(collection)
})
