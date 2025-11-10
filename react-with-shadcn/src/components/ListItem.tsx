import { LucideTrash2 } from "lucide-react"

export default function ListItem(props: any) {
  return (
    <div className="flex items-center justify-between border-b p-1">
      <div>{props?.todo}</div>
      <div>
        <button
          className="cursor-pointer"
          onClick={() => props?.removeTodo(props?.todo)}
        >
          <LucideTrash2 color="red" size={14} />
        </button>
      </div>
    </div>
  )
}
