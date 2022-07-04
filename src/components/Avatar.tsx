import { UserCircle } from "phosphor-react"
import { ImgHTMLAttributes } from "react"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  user: {
    name: string
    avatar_url?: string
  }
  hasOutline?: boolean
}

export function Avatar({ user, hasOutline = true, ...props }: AvatarProps) {
  return user.avatar_url ? (
    <img
      {...props}
      src={user.avatar_url}
      alt={user.name}
      width={52}
      className={
        hasOutline
          ? "w-16 h-16 rounded-lg border-gray-800 border-4 outline-2 outline outline-[#00b37e]"
          : "w-16 h-16 rounded-lg border-gray-900 border-4"
      }
    />
  ) : (
    <UserCircle
      size={52}
      className="w-16 h-16 rounded-lg border-gray-900 border-4"
    />
  )
}
