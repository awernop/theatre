import React from "react";
import "../Button/button.scss";
import Link from "next/link";

interface ButtonProps{
    children: React.ReactNode;
    href: string;
}

export default function Button({ children, href}: ButtonProps){
    return(
        <Link href={href}>
            <button className="button__red">{children}</button>
        </Link>
    )
}