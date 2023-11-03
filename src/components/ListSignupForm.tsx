import cn from 'classnames'
import {useEffect, useState} from 'react'
import Modal from './Modal'

export default function ListSignupForm() {
  const [msgVisible, setMsgVisible] = useState(false)
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(list => {
      list.forEach(mut => {
        const el = mut.target as HTMLElement
        setMsg(el.innerText)
        setMsgVisible(el.style.display !== 'none')
      })
      setLoading(false)
    })
    const errorContainer = document.getElementById('mce-error-response')
    const successContainer = document.getElementById('mce-success-response')
    errorContainer && observer.observe(errorContainer, {childList: true})
    successContainer && observer.observe(successContainer, {childList: true})
  }, [])

  const handleSetVisible = (visible: boolean) => {
    setMsgVisible(visible)
  }

  const handleSubmit = () => {
    setLoading(true)
  }

  return (
    <div id="mc_embed_signup" className="relative">
      <form
        action="https://gmail.us14.list-manage.com/subscribe/post?u=503113fabc16bea8dced4fd97&amp;id=c119ae34af&amp;f_id=00ed96e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="tags" value="12484270" />
        <div
          id="mc_embed_signup_scroll"
          className="flex flex-col items-stretch md:flex-row"
        >
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="Enter your email"
            className={cn(
              'input md:w-280px md:mr-10px',
              loading && 'opacity-50',
            )}
            disabled={loading}
            aria-required
            required
          />
          <input
            type="submit"
            defaultValue="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className={cn(
              'button bg-green-600 text-white font-bold mt-2 md:mt-0 md:ml-2',
              loading && 'bg-gray-300',
            )}
            disabled={loading}
          />
          <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
        </div>
        <div id="mce-responses" className="hidden">
          <div className="response hidden" id="mce-error-response"></div>
          <div className="response hidden" id="mce-success-response"></div>
        </div>
        <Modal
          id="message-modal"
          visible={msgVisible}
          setVisible={handleSetVisible}
        >
          {msg}
        </Modal>{' '}
        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
        <div className="absolute -left-[5000px]" aria-hidden="true">
          <input
            type="text"
            name="b_503113fabc16bea8dced4fd97_c119ae34af"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
      </form>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
        defer
      ></script>
    </div>
  )
}
