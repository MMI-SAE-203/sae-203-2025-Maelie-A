

// Tester la récupération de tous les films
// import { getAllFilms } from "./backend.mjs";
// try {
//   const Film = await getAllFilms();
//   console.log(JSON.stringify(Film, null, 2));
// } catch (e) {
//   console.error(e);
// }


// Tester la récupération de toutes les activités
// import { getAllActivities } from "./backend.mjs";
// try {
//   const activitie = await getAllActivities();
//   console.log("Activités triées par date:", activitie);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération de tous les invités
// import { getAllInvites } from "./backend.mjs";
// try {
//   const Invites = await getAllInvites();
//   console.log("Invités triés par nom:", Invites);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération d'un film par ID
// import { getFilmById } from "./backend.mjs";
// try {
//   const Film = await getFilmById("59958781p2d3571");
//   console.log("Film:", Film);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération d'une activité par ID
// import { getActivityById } from "./backend.mjs";
// try {
//   const activite = await getActivityById("v7np2r9hh280b31");
//   console.log("activite:", activite);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération d'un invite par ID
// import { getinvitesById } from "./backend.mjs";
// try {
//   const invites = await getinvitesById("77q8679j8h3kf78");
//   console.log("invités:", invites);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération des activités d’un animateur par ID
// import { getActivitiesByAnimatorId } from "./backend.mjs";
// try {
//   const activitiesByAnimator = await getActivitiesByAnimatorId(
//     "4h93d4759unr1ot"
//   );
//   console.log("Activités de l'animateur:", activitiesByAnimator);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération des activités d’un animateur par nom
// import { getActivitiesByAnimatorName } from './backend.mjs';
// try {
//    const activities = await getActivitiesByAnimatorName('Dupont');
//    console.table(activities);
// } catch (e) {
//    console.error(e);
// }


// Tester les ajouts, modifications et suppressions
// Ajouter un nouveau film
// import { addNewFilm } from './backend.mjs';
// try {
//    const newFilm = {
//        "titre_film": "test Film",
//        "synopsis_film": "test de synopsis",
//        "duree_film": '1heure50',
//        "list_acteur": 'test1,test2,test3',
//        "realisateur": 'Monsieur test',
//        "langue": 'Francais',
//        "production": 'oui oui'
//    };
//    await addNewFilm(newFilm);
//    console.log("Film ajoutée");
// } catch (e) {
//    console.error(e);
// }



// Ajouter une nouvelle activité
// import { addNewActivity } from './backend.mjs';
// try {
//    const newActivite = {
//        "nom_activite": "Test",
//        "description_activite": "Theatre",
//    };
//    await addNewActivity(newActivite);
//    console.log("Activite ajouté");
// } catch (e) {
//    console.error(e);
// }



// Ajouter un nouvel invité
// import { addNewInvite } from './backend.mjs';
// try {
//    const newInvite = {
//        "nom": "Test",
//        "prenom": "Activite",
//        "Biographie": "Nee en 1999",
//    };
//    await addNewInvite(newInvite);
//    console.log("Invite ajouté");
// } catch (e) {
//    console.error(e);
// }



// Supprimer un film par ID
// import { deleteFilmById } from './backend.mjs';
// try {
//    const recordId = 'dva8eyqne72hj64';
//    await deleteFilmById(recordId);
//    console.log("Film supprimée");
// } catch (e) {
//    console.error(e);
// }



// Supprimer une activité par ID
// import { deleteActivityById } from './backend.mjs';
// try {
//    const agentId = '0xv4t059ksv0nkg';
//    await deleteActivityById(agentId);
//    console.log("Activité supprimé");
// } catch (e) {
//    console.error(e);
// }



// Supprimer un invité par ID
// import { deleteInviteById } from './backend.mjs';
// try {
//    const recordId ='46xo41694p0uv6e';
//    await deleteInviteById(recordId);
//    console.log("Invité supprimé");
// }
// catch (e) {
//    console.error(e);
// }



// Mettre à jour un film par ID
// import { updateFilmById } from './backend.mjs';
// try {
//    const data = {
//        "titre_film": "test",
//        "synopsis_film": "test de synopsis",
//        "duree_film": '1heure50',
//        "list_acteur": 'test1,test2,test3',
//        "realisateur": 'Monsieur test',
//        "langue": 'Francais',
//        "production": 'oui oui'
//    };
//    const filmId = '';
//    await updateFilmById(filmId, data);
//    console.log("Film mis à jour");
// } catch (e) {
//    console.error(e);
// }




// Mettre à jour une activité par ID
// import { updateActivityById } from './backend.mjs';
// try {
//    const data = {
//        "nom_activite": "Updated Activity",
//        "description_activite": "Updated description",
//    };
//    const activityId = '';
//    await updateActivityById(activityId, data);
//    console.log("Activité mise à jour");
// } catch (e) {
//    console.error(e);
// }



// Mettre à jour un invité par ID
// import { updateInviteById } from './backend.mjs';
// try {
//    const data = {
//        "nom": "Updated Name",
//        "prenom": "Updated First Name",
//        "Biographie": "Updated Biography",
//    };
//    const inviteId = '';
//    await updateInviteById(inviteId, data);
//    console.log("Invité mis à jour");
// } catch (e) {
//    console.error(e);
// }



