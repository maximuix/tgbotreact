import React from 'react';
import Button from "../Button/button";
import {useTelegram} from "../../hooks/useTelegram";
import './header.css'

const Header = () => {
    const {user, onClose} = useTelegram()

    return (
        <header className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
              {user?.username}
            </span>
        </header>
    );
};

export default Header;