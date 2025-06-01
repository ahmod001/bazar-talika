
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

const useAudio = () => {
    const [sound, setSound] = useState();

    async function play() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('./assets/Hello.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

}