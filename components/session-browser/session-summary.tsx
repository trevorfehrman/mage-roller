import styled from '@emotion/styled'

import { FcInvite, FcCheckmark } from 'react-icons/fc'

import { ISession } from 'interfaces-and-types/session.interface'

type SessionSummaryProps = {
  session: ISession
  userEmail: string
}

function SessionSummary({ session, userEmail }: SessionSummaryProps) {
  return (
    <SessionSummaryStyled>
      <h3>{session.name}</h3>
      <div className="gamemaster">GM: {session.sessionAdmin}</div>
      <span className="players-heading">Players</span>
      <div className="players">
        {session.members
          .filter(invitee => invitee.email !== session.sessionAdmin)
          .map(invitee => (
            <>
              <span className="player" key={invitee.email}>
                {invitee.email}
              </span>
              {!invitee.invitationAccepted ? <FcInvite /> : <FcCheckmark />}
            </>
          ))}
      </div>
    </SessionSummaryStyled>
  )
}

const SessionSummaryStyled = styled('div')({
  textAlign: 'end',

  '& h3': {
    fontSize: '4rem',
  },

  '& .gamemaster': {
    margin: '2rem 0',
    textTransform: 'uppercase',
    fontSize: '2rem',
    fontWeight: 700,
  },

  '& .players-heading': {
    fontSize: '2rem',
    borderBottom: '2px solid var(--mage-green)',
    padding: '1rem',
    display: 'inline-block',
    marginBottom: '1rem',
  },

  '& .players': {
    display: 'grid',
    gridTemplateColumns: '1fr 1rem',
    gap: '1rem',
  },

  '& .player': {
    '&:not(:last-child)': {
      marginBottom: '.5rem',
    },
  },
})

export default SessionSummary
