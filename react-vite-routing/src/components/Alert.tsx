export default function Alert(props: any) {
  return (
    <>
        <div  style={{ color: props?.type == "success" ? "green" : "red" }}>Alert</div>
        <div>{ props?.children }</div>
    </>
  )
}
