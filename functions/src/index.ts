import * as functions from 'firebase-functions';

export const playerCreated = functions.firestore
    .document('players/{playerId}')
    .onCreate((event: functions.Event<functions.firestore.DeltaDocumentSnapshot>) => {
      // trigger content...
    });
