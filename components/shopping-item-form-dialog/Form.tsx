import React from 'react'
import { View } from 'react-native'
import TextField from '../form/TextField'
import ReactHookFormController from '@/services/react-hook-form/components/ReactHookFormController'
import useFormProvider from './hooks/useFormProvider'


const Form = () => {
    const { control } = useFormProvider()
    

    return (
        <View className='gap-y-1'>
            <ReactHookFormController
                control={control}
                name="title">
                <TextField
                    label="পণ্যের নাম"
                    placeholder="যেমনঃ আলু"
                />
            </ReactHookFormController>


            <ReactHookFormController
                control={control}
                name="amount">
                <TextField label='পন্যের পরিমান' placeholder='যেমন ১ kg' />
            </ReactHookFormController>

        </View>
    )
}




export default Form