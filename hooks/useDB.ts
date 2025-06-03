import { initDB } from '@/db/init';
import seedDB from '@/db/seeder';
import { useEffect } from 'react';

const useDB = (seed = false) => {
    useEffect(() => {
        (async () => {
            await initDB();

            if (seed) seedDB();

        })();
    }, []);

    return true;
};

export default useDB;