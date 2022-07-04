import { createContext, useContext } from "react"
import { IAuthor } from "../@types/Global"

interface IUserContext {
  user: IAuthor | null
}

export const UserContext = createContext<IUserContext | undefined>(undefined)

export function useUserContext() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUserContext must be within UserProvider")
  }

  return context
}
