import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import { useOnClickOutside } from 'usehooks-ts';

const Navbar = () => {
    const [active, setActive] = useState<string>();
    const [toggle, setToggle] = useState<boolean>(false);
    const mobileMenuRef = useRef<HTMLUListElement | null>(null);
    const { hash } = useLocation();

    useEffect(() => {
        const newHash = hash.replace('#', '');
        setActive(newHash);
        console.log(newHash);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogoClick = useCallback(() => {
        setActive('');
        window.scrollTo(0, 0);
    }, []);

    const handleNavLinkClick = useCallback(
        (navItemId: string, mobile?: boolean) => {
            setActive(navItemId);
            if (mobile) {
                setToggle(false);
            }
        },
        []
    );

    const handleClickOutside = () => {
        setToggle(false);
    };

    const handleMobileMenuClick = useCallback(() => {
        setToggle((prev) => !prev);
    }, []);

    const navMenu = useCallback(
        (mobile?: boolean) => {
            return (
                <ul
                    className={`${
                        mobile
                            ? 'list-none flex flex-col gap-4 justify-end items-start'
                            : 'list-none hidden sm:flex flex-row gap-10'
                    }`}
                    ref={mobileMenuRef}
                >
                    {navLinks.map((navItem) => (
                        <li
                            key={navItem.id}
                            className={`${
                                active === navItem.id
                                    ? 'text-white'
                                    : 'text-secondary'
                            } hover:text-white font-medium cursor-pointer font-poppins ${
                                mobile ? 'text-[16px]' : 'text-[18px]'
                            }`}
                            onClick={() =>
                                handleNavLinkClick(navItem.id, mobile)
                            }
                        >
                            <a href={`#${navItem.id}`}>{navItem.title}</a>
                        </li>
                    ))}
                </ul>
            );
        },
        [active, handleNavLinkClick]
    );

    useOnClickOutside(mobileMenuRef, handleClickOutside);

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed z-20  bg-primary `}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={handleLogoClick}
                >
                    <img
                        src={logo}
                        alt="logo"
                        className="w-9 h-9 object-contain"
                    />
                    <p className="text-white text-[18px] font-bold cursor-pointer">
                        GuVictory{' '}
                    </p>
                </Link>
                {navMenu(false)}
                <div className="sm:hidden flex flex-1 justify-end items-center ">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={handleMobileMenuClick}
                    />
                    <div
                        className={`${
                            toggle ? 'flex' : 'hidden'
                        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-md`}
                    >
                        {navMenu(true)}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
