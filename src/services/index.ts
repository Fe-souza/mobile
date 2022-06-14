import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export function uploadImage(path:string,image:string){
    const fileName = new Date().getTime();
    const reference = storage().ref(`/${path}/${fileName}.png`);

    reference.putFile(image);
    return reference.getDownloadURL();

}

export async function deleteImage(photoPath:string){

    const success = await storage()
    .ref(photoPath)
    .delete()
    .then(() => {
        return true
      })
      .catch(() => {
        return false
      });

      return success

}

export async function addData(data:any){

  const collection = data.collection;
  delete data.collection;

    const success = await firestore()
      .collection(collection)
      .add(data)
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      });

      return success
}

export async function getData(collection:string){
    const data = await firestore()
    .collection(collection)
    .get()
    .then((response) => {
         
        const list = response.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        
      return list;

    })
   
    return data
   
}

export async function deleteData(collection:string,id:string){
    const success = await firestore()
      .collection(collection)
      .doc(id)
      .delete()
      .then(() => {
        return true
      })
      .catch(() => {
        return false
      });

      return success
}