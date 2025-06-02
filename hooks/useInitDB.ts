import { initDB } from '@/db/init';
import { useEffect } from 'react';

const useInitDB = () => {
    useEffect(() => {
        (async () => {
            await initDB();
        })();
    }, []);

    return { status: true };
};

export default useInitDB;