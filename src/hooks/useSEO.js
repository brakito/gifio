import { useEffect, useRef } from "react"

export function useTitle({ title }) {
  const prevTitle = useRef(document.title)

  useEffect(() => {
    const previusTitle = prevTitle.current
    document.title = `GIFIO | ${title}`

    return () => document.title = previusTitle
  }, [title])
}