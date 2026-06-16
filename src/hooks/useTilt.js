import { useRef } from 'react'

export function useTilt() {
  const ref = useRef(null)

  const setTiltVars = (el, rotateX, rotateY, glowX, glowY) => {
    el.style.setProperty('--rotate-x', rotateX)
    el.style.setProperty('--rotate-y', rotateY)
    el.style.setProperty('--glow-x', glowX)
    el.style.setProperty('--glow-y', glowY)
  }

  const handleMove = (event) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const halfWidth = rect.width / 2
    const halfHeight = rect.height / 2
    const ratioX = (event.clientX - (rect.left + halfWidth)) / halfWidth
    const ratioY = (event.clientY - (rect.top + halfHeight)) / halfHeight

    setTiltVars(
      el,
      `${(-ratioY * 12).toFixed(2)}deg`,
      `${(ratioX * 12).toFixed(2)}deg`,
      `${((ratioX + 1) * 50).toFixed(2)}%`,
      `${((ratioY + 1) * 50).toFixed(2)}%`,
    )
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return

    setTiltVars(el, '0deg', '0deg', '50%', '50%')
  }

  return {
    tiltRef: ref,
    tiltHandlers: {
      onPointerMove: handleMove,
      onPointerLeave: handleLeave,
    },
  }
}
