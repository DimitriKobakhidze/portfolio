import { useCallback, useRef } from "react"

const useAppear = (animateClass,options) => {
    console.log(options)
    const observer = useRef()

    const itemRef = useCallback((node) => {
        if(observer.current) observer.current.disconnect()

        observer.current = new IntersectionObserver(entries => {
            const itemNode = entries[0]
            if(itemNode.isIntersecting){
                itemNode.target.classList.toggle(animateClass,itemNode.isIntersecting)
            }
            
        },options || {threshold : 0.5})

        observer.current.observe(node)
    },[animateClass])

    return { itemRef }
}

export default useAppear