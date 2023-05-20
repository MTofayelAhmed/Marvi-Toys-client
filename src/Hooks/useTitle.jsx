import { useEffect } from "react"

const useTitle = title =>{
  useEffect(()=>{
    document.title = `${title}-MARVITOYS`;

  }, [title])
}

export default useTitle;