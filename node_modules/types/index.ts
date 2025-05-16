export interface Song {
  id: string
  title: string
  artist: string
  duration?: number
  votes?: number
}

export interface Setlist {
  id: string
  title: string
  performerId: string
  songs: Song[]
  isLive: boolean
}

export interface User {
  id: string
  username: string
  profilePicUrl?: string
  followedUserIds: string[]
}
