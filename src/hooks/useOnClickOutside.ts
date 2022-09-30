import { RefObject, useEffect } from 'react'

type BaseHookType = (
  ref: RefObject<HTMLDivElement | HTMLButtonElement>,
  handler: (params?: unknown) => unknown,
) => void

const useOnClickOutside: BaseHookType = (ref, handler) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
