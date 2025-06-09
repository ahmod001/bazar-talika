import { useContext } from 'react'
import { FormContext } from '../providers/FormProvider'

const useFormProvider = () => {

    const form = useContext(FormContext)

    if (!form)
        throw Error('Use this hook inside FormContext')

    return form;

}

export default useFormProvider