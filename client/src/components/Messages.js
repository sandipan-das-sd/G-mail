import React, { useEffect, useState } from 'react';
import Message from './Message';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from "../firebase";

export default function Messages() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "emails"), (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      }));
      console.log(allEmails);
      setEmails(allEmails);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {emails.map((email) => (
        <Message key={email.id} email={email} />
      ))}
    </div>
  );
}
