migrate((db) => {
  const collection = new Collection({
    "id": "2w556kscqncdeme",
    "created": "2023-05-01 18:47:24.646Z",
    "updated": "2023-05-01 18:47:24.646Z",
    "name": "student_timetable",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lfobmkqb",
        "name": "student_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "sl2exdy6",
        "name": "theory_class_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "przu6da0irke7e1",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "c3w6kcjp",
        "name": "lab_class_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "68kf9vy1c383gdd",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2w556kscqncdeme");

  return dao.deleteCollection(collection);
})
