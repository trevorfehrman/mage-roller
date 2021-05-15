interface ISession {
  invitations: string[]
  members: {
    email: string
    invitationAccepted: boolean
  }[]
  name: string
  sessionAdmin: string
  createdAt: Date
}

export type { ISession }
