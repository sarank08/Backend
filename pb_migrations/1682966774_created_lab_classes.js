migrate((db) => {
  const collection = new Collection({
    "id": "68kf9vy1c383gdd",
    "created": "2023-05-01 18:46:14.788Z",
    "updated": "2023-05-01 18:46:14.788Z",
    "name": "lab_classes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5lqrsmv6",
        "name": "lab_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "irvh1tw1htjk9zr",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "1thtbjbv",
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
        "id": "spi32zmc",
        "name": "faculty_id",
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
  const collection = dao.findCollectionByNameOrId("68kf9vy1c383gdd");

  return dao.deleteCollection(collection);
})
