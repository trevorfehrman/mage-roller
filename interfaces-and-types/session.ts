interface ISession {
  invitations: string[]
  members: string[]
  name: string
  sessionAdmin: string
  createdAt: Date
}

export type { ISession }
