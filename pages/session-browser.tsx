import * as React from 'react'
import 'firebase/functions'
import 'firebase/firestore'
import 'firebase/auth'
import {
  useFunctions,
  useUser,
  useFirestoreCollectionData,
  useFirestore,
} from 'reactfire'

import { ISession } from '../interfaces-and-types'

function SessionBrowser() {
  const [email, setEmail] = React.useState<string>('')

  const user = useUser()

  const sessionsQuery = useFirestore()
    .collection('sessions')
    .where('invitations', 'array-contains', user.data.email)

  const invitations = useFirestoreCollectionData<ISession & { id: string }>(
    sessionsQuery,
    {
      idField: 'id',
    },
  )

  const functions = useFunctions()
  const callable = functions.httpsCallable('emailInvitation')
  function sendEmail() {
    callable({ email })
      .then(() => console.log('good'))
      .catch(() => console.log('baaaad'))
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  return (
    <div>
      <input
        value={email}
        onChange={handleChange}
        placeholder="member@example.com"
      />
      <button onClick={() => sendEmail()}>Send Invitation</button>
      {invitations.data?.map(invitation => (
        <div key={invitation.id}>{invitation.name}</div>
      ))}
    </div>
  )
}

SessionBrowser.getInitialProps = async ctx => {
  return null
}

export default SessionBrowser
