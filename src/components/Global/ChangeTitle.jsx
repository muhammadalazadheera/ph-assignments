// hooks/useTitle.js
import React from 'react'
import { useEffect } from "react";

function ChangeTitle({title}) {
  return (
    useEffect(() => {
        document.title = title;
      }, [title])
  )
}

export default ChangeTitle