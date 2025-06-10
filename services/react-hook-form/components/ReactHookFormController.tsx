import React from 'react'
import { type Control, Controller } from 'react-hook-form'



interface Props {
    name: string,
    control: Control<any>,
    children: React.ReactElement<any>
}

const ReactHookFormController = ({ children, name, control }: Props) => {

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value }, formState: { errors } }) => (
                React.cloneElement(children, {
                    value,
                    onBlur,
                    onChangeText: onChange,  
                    error: errors?.[name]?.message,
                })
            )}
        />

    )
}

export default ReactHookFormController