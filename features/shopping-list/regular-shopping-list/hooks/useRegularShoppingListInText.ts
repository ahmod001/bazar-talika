import { useEffect } from "react"
import useFetch from "./useFetch"
import { shoppingListInTextFormatted } from "@/utils/shoppingListInTextFormatted"

const useRegularShoppingListInText = () => {
    const { fetch, data } = useFetch()

    useEffect(() => {
        fetch()
    }, [])

    const txt = () => {
        return shoppingListInTextFormatted(data, 'বাজার তালিকা')
    }

    return { txt }
}

export default useRegularShoppingListInText