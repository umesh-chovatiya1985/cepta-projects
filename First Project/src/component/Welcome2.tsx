import { useContext } from 'react'
import type { propsData } from '../interface/welcome'
import { ContextTheme } from '../context/ThemeContext'

export default function Welcome2(props: propsData) {
  const { theme } = useContext(ContextTheme);
  return (
    <>
        <div>Theme : { theme }</div>
        <div>Welcome 2</div>
        <div>{ props?.name }</div>
        <br></br><br></br>
    </>    
  )
}
