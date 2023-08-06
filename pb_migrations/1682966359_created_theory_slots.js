migrate((db) => {
  const collection = new Collection({
    "id": "sndvj5rvuy428r1",
    "created": "2023-05-01 18:39:19.408Z",
    "updated": "2023-05-01 18:39:19.408Z",
    "name": "theory_slots",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7bpqjqci",
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
        "id": "ovubiwsr",
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
  const collection = dao.findCollectionByNameOrId("sndvj5rvuy428r1");

  return dao.deleteCollection(collection);
})
