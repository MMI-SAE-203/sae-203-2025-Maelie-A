/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Réalisateur",
      "Acteur",
      "Animateur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1569729562")

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Réalisateur",
      "Personnage",
      "Animateur"
    ]
  }))

  return app.save(collection)
})
