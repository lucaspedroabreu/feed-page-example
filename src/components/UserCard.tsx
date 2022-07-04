import { PencilSimpleLine } from "phosphor-react"
import React from "react"
import { useUserContext } from "../contexts/UserContext"
import { Avatar } from "./Avatar"

interface UserProps {
  user: {
    name: string
    avatar_url: string
    description?: string
  }
}

export function UserCard({ user }: UserProps) {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden tablet:max-w-md tablet:mx-auto">
      <img
        src="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=60"
        alt="background cover"
        className="object-fill h-20 w-full"
      />
      <div className="flex flex-col items-center relative mt-[-2rem]">
        <Avatar user={user} />
        <strong className="mt-4 text-gray-100 leading-6">{user.name}</strong>
        <span className="text-sm text-gray-400 leading-6">
          {user.description}
        </span>
      </div>
      <footer className="border-t border-gray-500 mt-6 p-8 pt-6 flex items-center justify-center">
        <a
          href="#"
          className="w-full bg-transparent text-[#00b37e] border border-[#00b37e] rounded-lg h-12 px-4 py-2 text-center font-bold decoration-none flex items-center justify-center gap-3 hover:bg-[#00b37e] hover:text-white transition-all ease-in-out duration-200"
        >
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
