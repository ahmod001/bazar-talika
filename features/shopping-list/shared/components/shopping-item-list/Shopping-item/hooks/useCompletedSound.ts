import { useAudioPlayer } from 'expo-audio';

const sound = require('../../../../assets/sounds/ding.mp3')

const useCompletedSound = () => {
    const player = useAudioPlayer(sound);

    player.volume = 0.6 // 60% volume

    const play = () => {
        player.seekTo(0)
        player.play()


    }

    return { play };
};

export default useCompletedSound;