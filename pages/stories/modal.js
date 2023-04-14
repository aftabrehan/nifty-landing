import { useState } from 'react'

import Stories from 'components/stories'
import Modal from 'components/modal'
import Button from 'components/button'

import stl from './Stories.module.scss'

const defaultArgs = { arg: 'Default' }
const blur = { arg: 'Blur', blur: true }
const dontCloseOnClickAway = {
  arg: 'DontCloseOnClickAway',
  closeOnClickAway: false,
}

const Template = args => {
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => setModalOpen(false)

  return (
    <>
      <Button label="Open" onClick={() => setModalOpen(true)} />
      <Modal isOpen={modalOpen} close={closeModal} {...args}>
        <div className={stl.modal}>
          <h3>Example Modal</h3>
          <Button label="Close" onClick={closeModal} variant="error" />
        </div>
      </Modal>
    </>
  )
}

const ModalStory = () => (
  <Stories
    argList={[defaultArgs, blur, dontCloseOnClickAway]}
    template={Template}
  />
)

export default ModalStory
