import type { JSX, ParentComponent } from 'solid-js'

interface ModalProps {
  id?: string,
  visible?: boolean,
  setVisible?: (visible: boolean) => void,
  children?: JSX.Element,
}

const Modal: ParentComponent<ModalProps> = (props: ModalProps) => {
  const handleClickClose = () => {
    props.setVisible?.(false)
  }

  return (
    <div class={props.visible ? 'block' : 'hidden'}>
      <div class="fixed inset-0"></div>
      <section 
        id={props.id} 
        class={`min-w-360px bg-white shadow-2xl p-60px absolute center`}
      >
        {props.children}
        <span 
          class="absolute top-5px right-7px p-5px leading-15px text-lg cursor-pointer"
          onClick={handleClickClose}
        >
            &times;
        </span>
      </section>
    </div>
  )
}

export default Modal
