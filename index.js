const admin = require('firebase-admin');

let serviceAccount = require('./pdc-demo-1.json');	//put your filename here

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();



//create a new collection and document
// var restRef = db.collection('restraunts').doc();
// var setRest = restRef.set({
//   name: ‘Mainland China’,
//   since: 1815
// });



// set various types of data
// var data = {
//   stringExample: 'Hello, World!',
//   booleanExample: true,
//   numberExample: 3.14159265,
//   dateExample: new Date('December 10, 1815'),
//   arrayExample: [5, true, 'hello'],
//   nullExample: null,
//   objectExample: {
//     a: 5,
//     b: true
//   }
// };
// var setDoc = db.collection('restraunts').doc('two').set(data);



//delete a doc
// var dRef = db.collection('restraunts').doc('one').delete();



//delete a field
// var dRef = db.collection('restraunts').doc('two');
// var FieldValue = require('firebase-admin').firestore.FieldValue;
// var removeArr = dRef.update({
//   arrayExample: FieldValue.delete()
// });



//read a document
// var uRef = db.collection('restraunts').doc('two');
// var getDoc = uRef.get()
//     .then(doc => {
//       if (!doc.exists) {
//         console.log('No such document!');
//       } else {
//         console.log('Document data:', doc.data());
//       }
//     })
//     .catch(err => {
//       console.log('Error getting document', err);
//     });



//read multiple documents
// var uRef = db.collection('restraunts');
// var query = uRef.where('booleanExample', '==', true).get()
//     .then(snapshot => {
//       snapshot.forEach(doc => {
//         console.log(doc.id, '=>', doc.data());
//       });
//     })
//     .catch(err => {
//       console.log('Error getting documents', err);
//     });



//subcollections
// var reviewsRef = db.collection('restraunts').doc('two')
//                 .collection('reviews').doc();



//real time updates on 1 document
// var uRef = db.collection('restraunts').doc('two');
// var getDoc = uRef.onSnapshot(docSnapshot => {
//       console.log('Document data:', docSnapshot.data());
//     }, err => {
//       console.log('Error getting document', err);
//     });



//real time updates on multiple documents
// var uRef = db.collection('restraunts').where('booleanExample', '==', true);
// var getDoc = uRef.onSnapshot(querySnapshot => {
//     console.log('Query data length ', querySnapshot.size);
// 	querySnapshot.forEach(doc => {
//        console.log(doc.id, '=>', doc.data());
//     });
//   }, err => {
//     console.log('Error getting query result ', err);
//   });