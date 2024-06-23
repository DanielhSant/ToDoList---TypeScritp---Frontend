import React, { useState } from "react";
import ThemeMode from '../../../components/header/theme/index.tsx'
import { Container, Title, UserInterface, Img, ContainerUser, DropdownMenu, DropdownItem, ToggleButton, StyledLink } from "./styles.tsx";
import LogoutIcon from '../../../assets/LogoutIcon.png'
import UserIcon from '../../../assets/UserIcon.png'
import ArrowDownIcon from '../../../assets/ArrowDownIcon.png'
import ArrowDownIconBlack from '../../../assets/ArrowDownIconBlack.png'
import { useThemeStore } from "../../../store/darkTheme.ts";


function Header ({title, user}) {
    const {darkMode} = useThemeStore()
    const [dropdownOpen, setDropdownOpen] = useState(false)

    function handleToggle(){
        setDropdownOpen(!dropdownOpen)
    }

    function Logout () {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('email')
        
    }

    return (
        <Container title = {title}>
        <Title>
            {title}
        </Title>
        <UserInterface>
            <ContainerUser user = {user} onClick={handleToggle}>
                <Img src ={UserIcon}/>
                {user}
                <ToggleButton src = {darkMode ? ArrowDownIcon : ArrowDownIconBlack} alt = "Toggle Menu"/>
            </ContainerUser>
            {dropdownOpen && (
                <DropdownMenu>
                    <StyledLink to = '/' onClick={Logout}>
                            <DropdownItem>
                                <Img src={LogoutIcon}/>
                                Sair
                            </DropdownItem>
                    </StyledLink>
                </DropdownMenu>
            )}
            </UserInterface>
            <ThemeMode/>
        </Container>
    )
}

export default Header