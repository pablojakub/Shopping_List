import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode;
    isVisible: boolean;
}

export const Portal = (props: PortalProps) => {
  const ref = useRef<Element | null>(null)
  const [mounted, setMounted] = useState<boolean>(props.isVisible)
  
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal")
  }, [])

  return (mounted && ref.current) ? createPortal(<div style={{
    "display": "block",
    "position": "fixed",
    "left": "0",
    "top": "0",
    "width": "100%",
    "height": "100%",
    "overflow": "auto",
    "backgroundColor": "rgba(0,0,0,0.4)",
    "zIndex": "2",
  }}>{props.children}</div>, ref.current) : null
}