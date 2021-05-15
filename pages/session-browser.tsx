import * as React from 'react'

import 'firebase/functions'
import 'firebase/firestore'
import 'firebase/auth'
import {
  // useFunctions,
  useUser,
  useFirestoreCollectionData,
  useFirestore,
} from 'reactfire'

import styled from '@emotion/styled'

import { ISession } from '../interfaces-and-types/session.interface'
import { SessionButton } from '../components/session-browser/session-button'
import SessionSummary from 'components/session-browser/session-summary'

function SessionBrowser() {
  // const [email, setEmail] = React.useState<string>('')
  const [selectedSession, setSelectedSession] = React.useState<ISession>()

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

  // const functions = useFunctions()
  // const callable = functions.httpsCallable('emailInvitation')
  // function sendEmail() {
  //   callable({ email })
  //     .then(() => console.log('good'))
  //     .catch(() => console.log('baaaad'))
  // }

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setEmail(event.target.value)
  // }

  return (
    <SessionBrowserStyled>
      <h3 className="heading">Sessions</h3>
      <div>
        {invitations.data?.map(invitation => (
          <SessionButton
            key={invitation.id}
            userEmail={user.data.email}
            invitation={invitation}
            setSelectedSession={setSelectedSession}
          />
        ))}
      </div>
      <div>
        {selectedSession && (
          <SessionSummary
            session={selectedSession}
            userEmail={user.data.email}
          />
        )}
      </div>
      {/* <input
        value={email}
        onChange={handleChange}
        placeholder="member@example.com"
      />
      <button onClick={() => sendEmail()}>Send Invitation</button> */}
    </SessionBrowserStyled>
  )
}

const SessionBrowserStyled = styled('div')({
  width: 'clamp(40rem, 50%, 84rem)',
  margin: '7rem auto 0 auto',
  display: 'grid',
  gridTemplateColumns: '30rem 1fr',
  gap: '2rem',

  '& .heading': {
    gridColumn: 'span 2',
    fontSize: '3rem',
  },
})

SessionBrowser.getInitialProps = async () => {
  return {}
}

export default SessionBrowser
