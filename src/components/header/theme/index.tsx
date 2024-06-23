import React from "react";
import {Icon, Button} from './styled.tsx'
import darkIcon from '../../../assets/darkMode.png'
import lightIcon from '../../../assets/lightMode.png'
import { useThemeStore } from "../../../store/darkTheme.ts";

function ThemeMode (){
    
    const {darkMode, toggleDarkMode} = useThemeStore()


    return(

            <Button>
                <Icon 
                    src={darkMode ?   lightIcon : darkIcon} 
                    onClick={toggleDarkMode} />
            </Button>

    )
}


export default ThemeMode