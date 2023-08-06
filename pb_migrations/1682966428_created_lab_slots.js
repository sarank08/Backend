migrate((db) => {
  const collection = new Collection({
    "id": "qoqm0h93h3uag3f",
    "created": "2023-05-01 18:40:28.247Z",
    "updated": "2023-05-01 18:40:28.247Z",
    "name": "lab_slots",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nmclfpc8",
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
        "id": "zagxo73k",
        "name": "slot",
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
  const collection = dao.findCollectionByNameOrId("qoqm0h93h3uag3f");

  return dao.deleteCollection(collection);
})
