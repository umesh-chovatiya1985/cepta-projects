export default function Button(props: any) {
  return (
    <button
      className="bg-gray-400 px-4 py-2 rounded mt-2 hover:bg-gray-500 hover:text-white cursor-pointer"
      onClick={props?.onClick}
    >
      {props?.children}
    </button>
  )
}
