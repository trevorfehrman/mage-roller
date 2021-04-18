import styled from '@emotion/styled'

import { ISession } from 'interfaces-and-types/session'

type SessionButtonProps = {
  invitation: ISession & { id: string }
  email: string
  setSelectedSession: React.Dispatch<React.SetStateAction<ISession>>
}

function SessionButton({
  invitation,
  email,
  setSelectedSession,
}: SessionButtonProps) {
  return (
    <SessionButtonStyled
      className="session"
      key={invitation.id}
      onClick={() => setSelectedSession(invitation)}
    >
      {invitation.sessionAdmin === email ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2rem',
            height: '100%',
            backgroundColor: 'var(--mage-green)',
          }}
        />
      ) : null}
      {invitation.name}
      {invitation.invitations.some(member => member === email) &&
      invitation.sessionAdmin !== email ? (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2rem',
            height: '100%',
            backgroundColor: 'var(--mage-green-highlight)',
          }}
        />
      ) : null}
    </SessionButtonStyled>
  )
}

const SessionButtonStyled = styled('button')({
  fontSize: '2rem',
  textTransform: 'uppercase',
  backgroundColor: 'var(--mage-gray)',
  padding: '1rem',
  cursor: 'pointer',
  transition: 'all .2s ease-out',
  display: 'block',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  outline: 'none',
  '&:not(:last-child)': {
    marginBottom: '2rem',
    width: '100%',
  },

  '&:active, &:hover, &:focus': {
    outline: 'none',
  },

  '&:hover': {
    backgroundColor: 'var(--mage-green-light)',
    borderBottomRightRadius: '1.5rem',
    borderTopLeftRadius: '1.5rem',
  },
})

export { SessionButton }
