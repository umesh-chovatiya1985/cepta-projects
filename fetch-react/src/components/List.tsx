export default function List({ record }: any) {
  return (
    <div>{ record?.id } : { record?.title }</div>
  )
}
