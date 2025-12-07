import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // If there is a hash, scroll to that element
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            // If no hash, scroll to top of page
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
