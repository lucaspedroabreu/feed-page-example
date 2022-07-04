import { Locale } from "date-fns"
import { Header } from "../components/Header"
import { Post } from "../components/Post"
import { UserCard } from "../components/UserCard"
import { useUserContext } from "../contexts/UserContext"

import { mockPosts } from "./@consts"

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

{
  /* <Post author={authorOne} comment={commentOnAuthorOne} likes={10}>
<p className="mt-4">Fala, galeraa 👋</p>
<p className="mt-4">
  Acabei de subir mais um projeto no meu portifolio. É um projeto
  que fiz no NLW Return, evento da Rocketseat. O nome do projto é
  DoctorCare 🚀
</p>
<p className="mt-4">
  👉
  <a href="#" className="text-[#00b37e] hover:text-emerald-400">
    {" "}
    jane.design/doctorcare
  </a>
</p>
<p className="mt-4">
  <a href="" className="text-[#00b37e] hover:text-emerald-400">
    #novoprojeto{" "}
  </a>
  <a href="" className="text-[#00b37e] hover:text-emerald-400">
    #nlw{" "}
  </a>
  <a href="" className="text-[#00b37e] hover:text-emerald-400">
    #rocketseat
  </a>
</p>
</Post> */
}
