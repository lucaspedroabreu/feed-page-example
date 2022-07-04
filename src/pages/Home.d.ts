import type { ReactNode } from "react"
export type Locale = typeof navigator.language

export type IAuthor = {
  id?: string
  name: string
  username?: string
  avatar_url: string
  description: string
  locale?: Locale
}

export type IComment = {
  id: string
  body: string
  author: IAuthor
  likes: number
  created_at: Date
  updatedAt: Date
}

export type IPost = {
  id: string
  title: string
  body: string | ReactNode | ReactElement
  author: IAuthor
  likes: number
  published_at: Date
  edited_at: Date
  comments: IComment[]
}
