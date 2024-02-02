import { useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToHashElement() {
    const location = useLocation();

    const hashElement = useMemo(() => {
        const hash = location.hash;
        const removeHashCharacter = (str) => {
            const result = str.slice(1);
            return result;
        };

        if (hash) {
            console.log('hash ', hash);
            const element = document.getElementById(removeHashCharacter(hash));

            return element;
        } else {
            return null;
        }
    }, [location]);

    useEffect(() => {
        if (hashElement) {
            console.log('scrolling to ', hashElement);
            hashElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [hashElement]);

    return null;
}

export default useScrollToHashElement;
