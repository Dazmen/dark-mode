import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = (initialValue) => {
    const [lightSwitch, setLightSwitch] = useLocalStorage('darkmode', initialValue)
    useEffect(() => {
        const body = document.body;
        if(lightSwitch === true){
            body.classList.add('dark-mode')            
        } else {
            body.classList.remove('dark-mode')
        };
    },[lightSwitch])

    return [lightSwitch, setLightSwitch]
};

export default useDarkMode;