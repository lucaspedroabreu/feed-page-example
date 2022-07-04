import type { IAuthor, IComment, IPost } from "./Home.d"
import { PostContentOne } from "./PostContentOne"

const authorOne: IAuthor = {
  id: "0",
  name: "Lucas Pedro",
  username: "lucaspedro",
  avatar_url: "https://avatars.githubusercontent.com/u/67482340?v=4",
  locale: "pt-BR",
  description: "Front-end developer",
}

const authorTwo: IAuthor = {
  id: "1",
  name: "Pedro Henrique",
  username: "pedrohenrique",
  avatar_url: "https://avatars.githubusercontent.com/u/640?v=4",
  locale: "pt-BR",
  description: "Full-stack developer",
}

const authorThree: IAuthor = {
  id: "2",
  name: "Diego Fernandes",
  username: "diegofernandes",
  avatar_url: "https://github.com/diego3g.png",
  locale: "pt-BR",
  description: "Full-stack developer",
}

const authorFour: IAuthor = {
  id: "3",
  name: "Myke Britto",
  username: "mykebritto",
  avatar_url: "https://avatars.githubusercontent.com/u/6643122?v=4",
  locale: "pt-BR",
  description: "Full-stack developer",
}

const postCommentOne: IComment = {
  id: "1",
  body: "This is a comment",
  author: authorFour,
  likes: 0,
  created_at: new Date("2022-06-30T09:09:00.000Z"),
  updatedAt: new Date("2022-06-30T09:09:00.000Z"),
}

const postCommentTwo: IComment = {
  id: "2",
  body: "This is another comment",
  author: authorTwo,
  likes: 0,
  created_at: new Date("2022-06-30T12:12:00.000Z"),
  updatedAt: new Date("2022-06-30T12:12:00.000Z"),
}

const postCommentThree: IComment = {
  id: "3",
  body: "This is another comment",
  author: authorThree,
  likes: 0,
  created_at: new Date("2022-06-30T11:11:00.000Z"),
  updatedAt: new Date("2022-06-30T11:11:00.000Z"),
}

const postOneFromAuthorOne: IPost = {
  id: "0",
  title: "Post One",
  body: PostContentOne,
  author: authorOne,
  likes: 10,
  published_at: new Date("2022-06-28T00:00:00.000Z"),
  edited_at: new Date("2022-06-28T00:00:00.000Z"),
  comments: [postCommentOne, postCommentTwo, postCommentThree],
}

const postOneFromAuthorTwo: IPost = {
  id: "1",
  title: "Post Two",
  body: "This is the second post",
  author: authorTwo,
  likes: 35,
  published_at: new Date("2022-06-29T00:00:00.000Z"),
  edited_at: new Date("2022-06-29T00:00:00.000Z"),
  comments: [],
}

export const mockPosts = [postOneFromAuthorOne, postOneFromAuthorTwo]
export const User = { user: authorOne }
