import { useState } from 'react'

import Stories from 'components/stories'
import Dialog from 'components/dialog'
import Button from 'components/button'

import stl from './Stories.module.scss'

const defaultArgs = { arg: 'Default' }
const blur = { arg: 'Blur', blur: true }
const dontCloseOnClickAway = {
  arg: 'DontCloseOnClickAway',
  closeOnClickAway: false,
}

const Template = args => {
  const [dialogOpen, setDialogOpen] = useState(false)

  const closeDialog = () => setDialogOpen(false)

  return (
    <>
      <Button label="Open" onClick={() => setDialogOpen(true)} />
      <Dialog isOpen={dialogOpen} close={closeDialog} {...args}>
        <Dialog.Header close={closeDialog} />
        <div className={stl.dialogContent}>
          <h3>Example Dialog</h3>
          <p>A Reusable Dialog</p>
        </div>
        <Dialog.Footer close={closeDialog} />
      </Dialog>
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
