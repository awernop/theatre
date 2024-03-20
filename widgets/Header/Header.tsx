'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "../../img/logo.png";
import { usePathname } from "next/navigation";
import { useUnit } from "effector-react";
import { $activeUser } from "@/stores/activeUserStore";

import styles from "./header.module.scss";

const links = [
    {name: "О театре", link: "/about"},
    {name: "Спектакли", link: "/performances"},
    {name: "Сотрудники", link: "/staff"}
]

const Header = () => {
    const activeUser = useUnit($activeUser);
    
    const router = usePathname();
    
    return(
    <header>
        <div className={styles.header}> 
            <div className={styles.level2}>
                <Link href="/"><Image src={logo} alt="Логотип"/></Link>
                <ul className={styles.navigation}>
                    {links.map(({name, link}, i) => {
                        return <li key={i} className={router === link ? styles.navigation__active : styles.navigation__txt}><Link href={link}>{name}</Link></li>
                    })}
                </ul>
                {activeUser.length != 0 ? (
                    <Link href="/user">
                        <button>
                            <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 14C14.3845 14 15.7378 13.5895 16.889 12.8203C18.0401 12.0511 18.9373 10.9579 19.4672 9.67879C19.997 8.3997 20.1356 6.99224 19.8655 5.63437C19.5954 4.2765 18.9287 3.02922 17.9497 2.05026C16.9708 1.07129 15.7235 0.404603 14.3656 0.134506C13.0078 -0.13559 11.6003 0.00303297 10.3212 0.532846C9.04213 1.06266 7.94888 1.95987 7.17971 3.11101C6.41054 4.26215 6 5.61553 6 7C6 8.85652 6.7375 10.637 8.05025 11.9497C9.36301 13.2625 11.1435 14 13 14ZM13 16C8.66125 16 0 18.68 0 24V28H26V24C26 18.68 17.3388 16 13 16Z" fill="black" />
                            </svg>
                        </button>
                    </Link>
                ) : (
                    <Link href="/login">
                        <button>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.2222 14L10.8889 6.22222V10.8889H0V17.1111H10.8889V21.7778L20.2222 14ZM24.8889 24.8889H12.4444V28H24.8889C26.6 28 28 26.6 28 24.8889V3.11111C28 1.4 26.6 0 24.8889 0H12.4444V3.11111H24.8889V24.8889Z" fill="black" />
                            </svg>
                        </button>
                    </Link>
                )}
                
            </div>
        </div>
    </header>
    )
}

export default Header;