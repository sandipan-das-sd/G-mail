import React, { useEffect } from 'react';
import Message from './Message';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase";
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from '../redux/appSlice';

export default function Messages() {
  const dispatch = useDispatch();
  const { emails } = useSelector(store => store.appSlice);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "emails"), (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      }));
      console.log(allEmails);
      dispatch(setEmails(allEmails));
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      {emails && emails.map((email) => <Message key={email.id} email={email} />)}
    </div>
  );
}
