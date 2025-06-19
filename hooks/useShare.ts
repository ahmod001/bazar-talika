import { Share } from "react-native";

const useShare = () => {
    
    const share = async (message: string, url?: string) => {
        try {
            await Share.share({
                message,
                ...(url ? { url } : {}),
            });

        } catch (error) {
            console.error('Share error:', error);
        }
    };

    return { share };
};

export default useShare;