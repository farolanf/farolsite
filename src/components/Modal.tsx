import type {ReactNode} from 'react'

interface ModalProps {
  id?: string
  visible?: boolean
  setVisible?: (visible: boolean) => void
  children?: ReactNode
}

export default function Modal(props: ModalProps) {
  const handleClickClose = () => {
    props.setVisible?.(false)
  }

  return (
    <div className={props.visible ? 'block' : 'hidden'}>
      <div className="fixed inset-0"></div>
      <section
        id={props.id}
        className="min-w-[360px] bg-white shadow-2xl p-[60px] absolute center"
      >
        {props.children}
        <span
          className="absolute top-[5px] right-[7px] p-[5px] leading-[15px] text-lg cursor-pointer"
          onClick={handleClickClose}
        >
          &times;
        </span>
      </section>
    </div>
  )
}
