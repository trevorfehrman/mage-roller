import { ISession } from 'interfaces-and-types/session'

type SessionSummaryProps = {
  session: ISession
}

function SessionSummary({ session }: SessionSummaryProps) {
  return (
    <div>
      <h3>{session.name}</h3>
      <div>GM: {session.sessionAdmin}</div>
      <div>Members</div>
      {session.invitations.map(invitee => (
        <div key={invitee}>{invitee}</div>
      ))}
    </div>
  )
}

export default SessionSummary
