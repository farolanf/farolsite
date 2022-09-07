import type { ParentComponent } from 'solid-js'

const Header: ParentComponent = (props) => {
  return (
    <header>{props.children}</header>
  )
}

export default Header
