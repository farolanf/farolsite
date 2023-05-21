import type { Component } from 'solid-js'
import { onMount, createSignal } from 'solid-js'
import Modal from './Modal'

const ListSignupForm: Component = (_props) => {
  const [msgVisible, setMsgVisible] = createSignal(false)
  const [msg, setMsg] = createSignal('')
  const [loading, setLoading] = createSignal(false)

  onMount(() => {
    const observer = new MutationObserver((list) => {
      list.forEach((mut) => {
        const el = mut.target as HTMLElement
        setMsg(el.innerText)
        setMsgVisible(el.style.display !== 'none')
      })
      setLoading(false)
    })
    const errorContainer = document.getElementById('mce-error-response')
    const successContainer = document.getElementById('mce-success-response')
    errorContainer && observer.observe(errorContainer, { childList: true })
    successContainer && observer.observe(successContainer, { childList: true })
  })

  const handleSetVisible = (visible: boolean) => {
    setMsgVisible(visible)
  }

  const handleSubmit = () => {
    setLoading(true)
  }

  return (
    <div id="mc_embed_signup" class="relative">
      <form
        action="https://gmail.us14.list-manage.com/subscribe/post?u=503113fabc16bea8dced4fd97&amp;id=c119ae34af&amp;f_id=00ed96e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="tags" value="12484270" />
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            value=""
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="Enter your email"
            class="input w-280px mr-10px"
            classList={{ 'opacity-50': loading() }}
            disabled={loading()}
            required
          />
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            class="button bg-green-600 text-white font-bold mt-10px"
            classList={{ 'bg-gray-300': loading() }}
            disabled={loading()}
          />
          <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
        </div>
        <div id="mce-responses" class="hidden">
          <div
            class="response"
            id="mce-error-response"
            style="display:none"
          ></div>
          <div
            class="response"
            id="mce-success-response"
            style="display:none"
          ></div>
        </div>
        <Modal
          id="message-modal"
          visible={msgVisible()}
          setVisible={handleSetVisible}
        >
          {msg}
        </Modal>{' '}
        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input
            type="text"
            name="b_503113fabc16bea8dced4fd97_c119ae34af"
            tabindex="-1"
            value=""
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

export default ListSignupForm
