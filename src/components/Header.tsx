import type {PropsWithChildren} from 'react'

type HeaderProps = PropsWithChildren

export default function Header(props: HeaderProps) {
  return <header>{props.children}</header>
}
