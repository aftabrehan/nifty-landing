export const getCommonMotionProps = (animation, setAnimation) => {
  return {
    onViewportEnter: () => setAnimation(true),
    initial: { translateY: '50%', opacity: 0 },
    animate: {
      translateY: animation ? 0 : '100%',
      opacity: animation ? 1 : 0,
    },
    transition: { duration: 0.5, delay: 0.1 },
  }
}

export const scrollToSection = sectionId => {
  const section = document.getElementById(sectionId)
  if (!section) return
  const yOffset = -75 // adjust as needed to account for any fixed headers or other elements
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
  window.scrollTo({ top: y, behavior: 'smooth' })
}
