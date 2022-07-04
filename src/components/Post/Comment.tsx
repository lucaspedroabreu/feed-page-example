import { HandsClapping, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "../Avatar"

import type { IComment } from "../../@types/Global"
import { ptBR } from "date-fns/locale"
import { format, formatDistanceToNow } from "date-fns"
import { useUserContext } from "../../contexts/UserContext"

type CommentDTO = {
  comment: IComment
  onDeleteComment: (id: string) => void
}

export function Comment({ comment, onDeleteComment }: CommentDTO) {
  const [applauseCount, setApplauseCount] = useState(comment.likes)
  const userContext = useUserContext()
  const commentedDateFormatted = format(
    comment.created_at,
    "cccc' - 'd' de 'MMMM' de 'yyyy' às 'HH':'mm",
    { locale: ptBR }
  )

  const commentedDateRelativeToNow = formatDistanceToNow(comment.created_at, {
    locale: ptBR,
    addSuffix: false,
  })

  const isDeletable = userContext.user?.id === comment.author.id

  function handleDeleteComment() {
    if (isDeletable) {
      onDeleteComment(comment.id)
    }
  }

  function handleAddApplause() {
    setApplauseCount((state) => state + 1)
  }

  return (
    <div className="mt-6 flex gap-4">
      <Avatar user={comment.author} hasOutline={false} />

      <div className="commentBox flex flex-grow flex-col">
        <div className="commentContent bg-gray-700 rounded-lg p-4">
          <header className="flex items-start justify-between">
            <div className="authorAndTime flex flex-col">
              <strong className="text-sm leading-6">
                {comment.author.name}
              </strong>
              <time
                title={commentedDateFormatted}
                dateTime={comment.created_at.toISOString()}
                className="text-xs text-gray-400"
              >
                {commentedDateRelativeToNow} atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
              disabled={!isDeletable}
              className={
                !isDeletable
                  ? "hidden"
                  : "text-gray-400 focus:text-red-600 hover:text-red-600 transition-colors pointer-events-auto 200ms"
              }
            >
              <Trash size={20} />
            </button>
          </header>
          <p className="mt-4 text-gray-300">{comment.body}</p>
        </div>
        <footer className="mt-4 group">
          <button
            onClick={handleAddApplause}
            className="bg-transparent text-gray-400 flex items-center justify-center p-2 gap-2 hover:text-emerald-400"
          >
            <HandsClapping size={20} />
            Aplaudir
            <span className="group-hover:text-gray-400">•</span>
            <span className="group-hover:text-gray-400">{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
