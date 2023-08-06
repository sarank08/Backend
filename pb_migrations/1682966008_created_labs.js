migrate((db) => {
  const collection = new Collection({
    "id": "irvh1tw1htjk9zr",
    "created": "2023-05-01 18:33:28.909Z",
    "updated": "2023-05-01 18:33:28.909Z",
    "name": "labs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5ny0pqd4",
        "name": "course_name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wxxbnapg",
        "name": "course_code",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pvtcgzap",
        "name": "lab_slot",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("irvh1tw1htjk9zr");

  return dao.deleteCollection(collection);
})
