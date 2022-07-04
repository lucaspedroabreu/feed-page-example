import { formatDistanceToNow } from "date-fns"
import format from "date-fns/format"
import ptBR from "date-fns/locale/pt-BR"
import { Comment } from "./Comment"
import { Avatar } from "../Avatar"
import { PostContentOne } from "../../@consts/PostContentOne"
import { HandsClapping, ThumbsUp } from "phosphor-react"

import type { IPost } from "../../@types/Global"
import { FormEvent, InvalidEvent, useRef, useState } from "react"
import { useUserContext } from "../../contexts/UserContext"

function capitalize(string: string) {
  return (
    string.charAt(0).toLocaleUpperCase(navigator.language) + string.slice(1)
  )
}

type PostDTO = {
  post: IPost
}

export function Post({ post }: PostDTO) {
  const [comments, setComments] = useState([...post.comments])
  const [applauseCount, setApplauseCount] = useState(post.likes)
  const [isValidInput, setIsValidInput] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const publishedDateFormatted = format(
    post.published_at,
    "cccc' - 'd' de 'MMMM' de 'yyyy' às 'HH':'mm",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(post.published_at, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleAddApplause = (event: FormEvent) => {
    event.preventDefault()
    setApplauseCount((state) => state + 1)
  }

  const userContext = useUserContext()
  const commentAuthor = userContext.user
    ? userContext.user
    : {
        name: "Anônimo",
        avatar_url: "",
        description: "Usuário não quis se identificar",
      }

  const handleAddComment = (event: FormEvent) => {
    event.preventDefault()

    if (!textareaRef.current) return

    setComments([
      ...comments,
      {
        id: (comments.length + Math.random()).toString(),
        body: textareaRef.current.value,
        author: commentAuthor,
        created_at: new Date(),
        updatedAt: new Date(),
        likes: 0,
      },
    ])

    textareaRef.current.value = ""
    textareaRef.current.blur()
  }

  function handleNewCommentValidation(
    event:
      | InvalidEvent
      | FormEvent
      | InputEvent
      | ErrorEvent
      | Event
      | SubmitEvent
  ) {}

  function deleteComment(commentId: string) {
    setComments(comments.filter((comment) => comment.id !== commentId))
  }

  return (
    <article className="bg-gray-800 rounded-lg p-10">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar user={post.author} />
          <div className="flex flex-col">
            <strong className="text-gray-100 leading-6">
              {post.author.name}
            </strong>
            <span className="text-sm text-gray-400">
              {post.author.description}
            </span>
          </div>
        </div>
        <div>
          <time
            title={capitalize(publishedDateFormatted)}
            dateTime={post.published_at.toISOString()}
            className="text-md text-gray-400"
          >
            Publicado {publishedDateRelativeToNow}
          </time>
        </div>
      </header>
      <div className="text-gray-300 mt-6 leading-6">
        {post.author.id === "0" && <PostContentOne />}
      </div>
      <section>
        <form
          onSubmit={handleAddComment}
          className="w-full mt-6 pt-6 border-t border-gray-600 "
        >
          <div className="flex justify-between">
            <strong className="leading-6 text-gray-100">
              Deixe seu feedback
            </strong>
            <button
              onClick={handleAddApplause}
              className="group bg-transparent text-gray-400 flex items-center justify-center p-2 gap-2 hover:text-emerald-400"
            >
              <HandsClapping size={20} />
              Aplaudir
              <span className="group-hover:text-gray-400">•</span>
              <span className="group-hover:text-gray-400">{applauseCount}</span>
            </button>
          </div>
          <div className="group">
            <textarea
              name="comment"
              required
              onChange={() =>
                setIsValidInput(textareaRef.current?.value !== "")
              }
              // onInvalid={handleNewCommentValidation}
              ref={textareaRef}
              placeholder="Deixe seu comentário"
              className="w-full bg-gray-900 border-0 resize-none h-32 p-4 rounded-lg leading-6 mt-4 outline-none focus:outline-emerald-600"
            ></textarea>
            <div className="invisible h-0 group-focus-within:visible group-focus-within:h-12 transition-all ease-in-out 1000ms group-focus-within:inline-block group-focus-within:pb-10">
              <button
                type="submit"
                disabled={!isValidInput}
                onClick={(e) => {
                  e.currentTarget.blur()
                }}
                className="invisible bg-transparent group-focus-within:visible 400ms py-4 px-6 mt-4 rounded-lg border-0 group-focus-within:bg-emerald-600 font-bold text-white cursor-pointer outline-none focus:outline-emerald-400 group-focus-within:hover:bg-emerald-500 transition-colors ease-in-out disabled:group-focus-within:bg-gray-700 disabled:group-focus-within:text-gray-400 disabled:group-focus-within:cursor-not-allowed  disabled:group-focus-within:opacity-50"
              >
                Publicar
              </button>
            </div>
          </div>
        </form>
      </section>
      <footer className="mt-10">
        {comments.map((comment: any) => (
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </footer>
    </article>
  )
}
