import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

// Récupérer tous les films triés par date de projection
export async function getAllFilms() {
  return await pb.collection("Film").getFullList({
    sort: "dateProjection",
  });
  return Film;
}

// Récupérer toutes les activités triées par date de projection
export async function getAllActivities() {
  return await pb.collection("activite").getFullList({
    sort: "date_heure_activite",
  });
  return activite;
}

// Récupérer tous les acteurs et réalisateurs triés par ordre alphabétique
export async function getAllParticipants() {
  return await pb.collection("participants").getFullList({
    sort: "nom",
  });
}

// Récupérer les infos d'un film par son ID
export async function getFilmById(id) {
  return await pb.collection("films").getOne(id);
}

// Récupérer les infos d'une activité par son ID
export async function getActivityById(id) {
  return await pb.collection("activites").getOne(id);
}

// Récupérer les infos d'un acteur ou réalisateur par son ID
export async function getParticipantById(id) {
  return await pb.collection("participants").getOne(id);
}

// Récupérer toutes les activités d’un animateur donné par son ID
export async function getActivitiesByAnimatorId(id) {
  return await pb.collection("activites").getFullList({
    filter: `animateur = "${id}"`,
  });
}

// Récupérer toutes les activités d’un animateur donné par son nom
export async function getActivitiesByAnimatorName(nom) {
  const animateurs = await pb.collection("animateurs").getFullList({
    filter: `nom = "${nom}"`,
    expand: "activites",
  });
  return animateurs;
}

// Ajouter ou modifier un film, une activité ou un invité
export async function upsertItem(collection, id, data) {
  if (id) {
    return await pb.collection(collection).update(id, data);
  } else {
    return await pb.collection(collection).create(data);
  }
}
