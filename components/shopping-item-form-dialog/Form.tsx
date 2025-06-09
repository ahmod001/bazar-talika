import React from 'react'
import { View } from 'react-native'
import TextField from '../form/TextField'

const Form = () => {
    const _e = ''
    return (
        <View className='gap-y-1'>
            <TextField autoFocus label='পন্যের নাম' placeholder='যেমন আলু' error={_e} />
            <TextField label='পন্যের পরিমান' placeholder='যেমন ১ kg' error={_e} />
        </View>
    )
}

export default Form