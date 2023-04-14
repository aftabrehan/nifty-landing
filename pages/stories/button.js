import Stories from 'components/stories'
import Button from 'components/button'

const primary = { arg: 'Primary', label: 'Primary' }
const secondary = { arg: 'Secondary', label: 'Secondary', variant: 'secondary' }
const rounded = { arg: 'Rounded', label: 'Rounded', btnType: 'rounded' }

const ButtonStory = () => (
  <Stories
    argList={[primary, secondary, rounded]}
    template={args => <Button {...args} />}
  />
)

export default ButtonStory
