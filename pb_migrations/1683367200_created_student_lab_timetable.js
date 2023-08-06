migrate((db) => {
  const collection = new Collection({
    "id": "aqwn2y3bi8c8ipp",
    "created": "2023-05-06 10:00:00.483Z",
    "updated": "2023-05-06 10:00:00.483Z",
    "name": "student_lab_timetable",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cdbumb7e",
        "name": "teacher_id",
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
        "id": "iyju9rgy",
        "name": "lab_slot_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "qoqm0h93h3uag3f",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "1jbhwcrj",
        "name": "strength",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": 100
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
  const collection = dao.findCollectionByNameOrId("aqwn2y3bi8c8ipp");

  return dao.deleteCollection(collection);
})
