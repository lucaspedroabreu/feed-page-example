import { Locale } from "date-fns"
import { Header } from "../components/Header"
import { Post } from "../components/Post"
import { UserCard } from "../components/UserCard"
import { useUserContext } from "../contexts/UserContext"

import { mockPosts } from "../@consts/PostsAuthorAndContent"

export function Home() {
  const userContext = useUserContext()
  return (
    <div>
      <Header />

      <div className="w-full max-w-6xl my-8 mx-auto py-0 px-4 grid grid-cols-[256px_minmax(256px,_1fr)] gap-8 items-start tablet:grid-cols-1">
        <UserCard user={userContext.user!} />
        <main className="w-full flex flex-col gap-5">
          {mockPosts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  )
}
