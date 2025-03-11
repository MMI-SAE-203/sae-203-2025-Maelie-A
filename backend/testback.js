

// Tester la récupération de tous les films
// import { getAllFilms } from "./backend.mjs";
// try {
//   const Film = await getAllFilms();
//   console.log(JSON.stringify(Film, null, 2));
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération de toutes les activités
import { getAllActivities } from "./backend.mjs";
try {
  const activitie = await getAllActivities();
  console.log("Activités triées par date:", activitie);
} catch (e) {
  console.error(e);
}

// // Tester la récupération de tous les participants
// try {
//   const participants = await getAllParticipants();
//   console.log("Participants triés par nom:", participants);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération d'un film par ID
// try {
//   const film = await getFilmById("film_id_exemple");
//   console.log("Film:", film);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération d'une activité par ID
// try {
//   const activity = await getActivityById("activity_id_exemple");
//   console.log("Activité:", activity);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération d'un participant par ID
// try {
//   const participant = await getParticipantById("participant_id_exemple");
//   console.log("Participant:", participant);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération des activités d’un animateur par ID
// try {
//   const activitiesByAnimator = await getActivitiesByAnimatorId(
//     "animateur_id_exemple"
//   );
//   console.log("Activités de l'animateur:", activitiesByAnimator);
// } catch (e) {
//   console.error(e);
// }

// // Tester la récupération des activités d’un animateur par nom
// try {
//   const activitiesByName = await getActivitiesByAnimatorName("Nom Animateur");
//   console.log("Activités de l'animateur (nom):", activitiesByName);
// } catch (e) {
//   console.error(e);
// }

// // Tester l'ajout/modification d'un film
// try {
//   const newFilm = {
//     titre: "Nouveau Film",
//     dateProjection: "2025-05-10",
//     realisateur: "Réalisateur Exemple",
//   };
//   const result = await upsertItem("films", null, newFilm);
//   console.log("Film ajouté/modifié:", result);
// } catch (e) {
//   console.error(e);
// }
