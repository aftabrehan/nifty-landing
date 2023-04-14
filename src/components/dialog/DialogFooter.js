import PropTypes from 'prop-types'
import clsx from 'clsx'

import Button from 'components/button'

import stl from './Dialog.module.scss'

const DialogFooter = ({
  onClick = () => console.log('confirm clicked'),
  label = 'Confirm',
  size,
  close,
  customClass,
}) => (
  <div className={clsx(stl.footer, stl[`${size}Footer`], customClass)}>
    <Button onClick={close} label="Cancel" size={size} variant="error" />
    <Button onClick={onClick} label={label} size={size} />
  </div>
)

DialogFooter.propTypes = {
  customClass: PropTypes.string,
}

export default DialogFooter
