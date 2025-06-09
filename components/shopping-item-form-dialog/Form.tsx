import React from 'react'
import { View } from 'react-native'
import TextField from '../form/TextField'
import * as yup from 'yup'
import { Controller, useForm, } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import ReactHookFormController from '@/services/react-hook-form/components/ReactHookFormController'

const schema = yup.object({
    title: yup.string().required('পন্যের নাম দিতে হবে'),
    amount: yup.string().required('পন্যের পরিমান দিতে হবে')
})

const Form = () => {
    const { control, handleSubmit } = useForm({
        mode: 'onBlur',
        defaultValues: { title: '', amount: '' },
        resolver: yupResolver(schema)
    })
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