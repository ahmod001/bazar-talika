import { ImageBackground, ImageBackgroundProps } from 'react-native'
import React from 'react'


interface Props extends ImageBackgroundProps {
    fullIcon?: boolean
}

const Logo = ({ fullIcon = true, ...props }: Props) => {
    return (
        <ImageBackground resizeMode='cover' source={getLogoUrl(fullIcon)} accessibilityLabel="বাজার তালিকা" imageStyle={{ borderRadius: 5 }}
            {...props}
            accessible={true} />
    )
}


function getLogoUrl(fullIcon: boolean = true) {
    if (fullIcon)
        return require('@/assets/images/logo/logo.jpg')

    return require('@/assets/images/logo/logo_without-title.png');
}

export default Logo;