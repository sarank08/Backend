migrate((db) => {
  const collection = new Collection({
    "id": "przu6da0irke7e1",
    "created": "2023-05-01 18:44:58.694Z",
    "updated": "2023-05-01 18:44:58.694Z",
    "name": "theory_classes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "od7yciwd",
        "name": "course_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "wdqd4g7tioacv0n",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "qemyl1vn",
        "name": "slot",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "sndvj5rvuy428r1",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "3ujiv5sv",
        "name": "teacher_name",
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
  const collection = dao.findCollectionByNameOrId("przu6da0irke7e1");

  return dao.deleteCollection(collection);
})
