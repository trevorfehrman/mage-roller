import styled from '@emotion/styled'

import { ISession } from 'interfaces-and-types/session.interface'

type SessionButtonProps = {
  invitation: ISession & { id: string }
  userEmail: string
  setSelectedSession: React.Dispatch<React.SetStateAction<ISession>>
}

function SessionButton({
  invitation,
  userEmail,
  setSelectedSession,
}: SessionButtonProps) {
  return (
    <SessionButtonStyled
      className="session"
      key={invitation.id}
      onClick={() => setSelectedSession(invitation)}
    >
      {invitation.sessionAdmin === userEmail ? (
        <div
          css={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2rem',
            height: '100%',
            backgroundColor: 'var(--mage-green-dark)',
          }}
        />
      ) : null}
      {invitation.name}
      {invitation.members.some(member => {
        return member.email === userEmail && !member.invitationAccepted
      }) && invitation.sessionAdmin !== userEmail ? (
        <div
          css={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2rem',
            height: '100%',
            backgroundColor: 'var(--mage-green)',
          }}
        />
      ) : null}
    </SessionButtonStyled>
  )
}

const SessionButtonStyled = styled('button')({
  fontSize: '2rem',
  textTransform: 'uppercase',
  // backgroundColor: 'var(--mage-gray)',
  padding: '1rem',
  cursor: 'pointer',
  transition: 'all .2s ease-out',
  display: 'block',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
  outline: 'none',

  '&:active, &:hover, &:focus': {
    outline: 'none',
  },

  '&:hover': {
    // backgroundColor: 'var(--mage-green-light)',
    borderBottomRightRadius: '1.5rem',
    borderTopLeftRadius: '1.5rem',
  },
})

export { SessionButton }
