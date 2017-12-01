import * as admin from 'firebase-admin'

const serviceAccount = require("../../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ludoio-f31b4.firebaseio.com"
});

function addPlayer(name: string, players: number) {
    return admin.firestore().collection('players').doc().create({ name, players });
}

addPlayer('Huey', 3).then(() => console.log('added Huey'));
addPlayer('Foo', 2).then(() => console.log('added Foo'));
addPlayer('Dewey', 3).then(() => console.log('added Dewey'));
addPlayer('Bar', 2).then(() => console.log('added Bar'));
addPlayer('Louie', 3).then(() => console.log('added Louie'));
