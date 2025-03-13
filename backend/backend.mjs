import PocketBase from "pocketbase";
const pb = new PocketBase("https://pb-sae-203.maelie-addario.fr:443");

//routes dynaliques pour les films

export async function getFilm() {
  try {
    let Film = await pb.collection("Film").getFullList({
      sort: "dateProjection",
    });

    const updatedFilm = Film.map((Film) => ({
      ...Film,
      imageUrl: Film.affiche_film
        ? pb.files.getUrl(Film, Film.affiche_film, { thumb: "1024x1024" })
        : "placeholder.svg",
    }));

    console.log("Liste des films", updatedFilm);

    return updatedFilm; // Correction ici : on retourne updatedFilm au lieu de updatedMovies
  } catch (error) {
    console.log("Une erreur est survenue en lisant la liste des films", error);
    return [];
  }
}

//routes dynamiques pour les invités

export async function getInvite() {
  try {
    let Invites = await pb.collection("Invites").getFullList({
      sort: "Nom",
    });

    const updatedInvites = Invites.map((invite) => ({
      ...invite,
      imageUrl: invite.photo_invites
        ? pb.files.getUrl(invite, invite.photo_invites, { thumb: "1024x1024" })
        : "placeholder.svg",
    }));

    console.log("Liste des invités", updatedInvites);

    return updatedInvites;
  } catch (error) {
    console.log(
      "Une erreur est survenue en lisant la liste des invités",
      error
    );
    return [];
  }
}

export async function getinvitesById(id) {
  try {
    let invite = await pb.collection("Invites").getOne(id);
    invite.imageUrl = pb.files.getURL(invite, invite.photo_invites);
    console.log("Invité trouvé", invite);

    if (!invite) {
      console.log("Aucun invité trouvé !");
      return null;
    }

    return invite;
  } catch (error) {
    console.log("Erreur lors de la récupération de l'invité :", error);
    return null;
  }
}

// Récupérer les infos d'un film par son ID avec image URL
export async function getFilmById(id) {
  try {
    const film = await pb.collection("Film").getOne(id);

    if (!film) return null;

    return {
      ...film,
      imageUrl: film.affiche_film
        ? pb.files.getUrl(film, film.affiche_film, { thumb: "1024x1024" })
        : "placeholder.svg",
    };
  } catch (error) {
    console.error("Erreur lors de la récupération du film", error);
    return null;
  }
}

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
export async function getAllInvites() {
  return await pb.collection("Invites").getFullList({
    sort: "Nom",
  });
  return Invites;
}

// Récupérer les infos d'une activité par son ID
export async function getActivityById(id) {
  return await pb.collection("activite").getOne(id);
  return activite;
}

// Récupérer toutes les activités d’un animateur donné par son ID
// export async function getActivitiesByAnimatorId(id) {
//   return await pb.collection("activite").getFullList({
//     filter: `Invite_associe = "${id}"`,
//   });
// }

// Récupérer toutes les activités d’un animateur donné par son nom
export async function getActivitiesByAnimatorId(InviteId) {
  const activities = await pb.collection("activite").getFullList({
    filter: `invite_associe = '${InviteId}'`,
  });
  return activities;
}

// Liste des activités d’un animateur par nom
export async function getActivitiesByAnimatorName(name) {
  const invite = await pb
    .collection("Invites")
    .getFirstListItem(`nom = "${name}"`);
  return await getActivitiesByAnimatorId(invite.id);
}

// Tester les ajouts, modifications et suppressions

// Ajouter un nouveau film
export async function addNewFilm(newFilm) {
  await pb.collection("Film").create(newFilm);
}

// Ajouter une nouvelle activité
export async function addNewActivite(newActivity) {
  await pb.collection("activite").create(newActivity);
}

// Ajouter un nouvel invité
export async function addNewInvite(newInvite) {
  await pb.collection("Invites").create(newInvite);
}

// Supprimer un film par ID
export async function deleteFilmById(id) {
  await pb.collection("Film").delete(id);
}

// Supprimer une activité par ID
export async function deleteActivityById(id) {
  await pb.collection("activite").delete(id);
}

// Supprimer un invité par ID
export async function deleteInviteById(id) {
  await pb.collection("Invites").delete(id);
}

// Modifier un film par ID
export async function updateFilmById(id, data) {
  await pb.collection("Films").update(id, data);
}

// Modifier une activité par ID
export async function updateActivityById(id, data) {
  await pb.collection("activite").update(id, data);
}

// Modifier un invité par ID
export async function updateInviteById(id, data) {
  await pb.collection("Invites").update(id, data);
}
