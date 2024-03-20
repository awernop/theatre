import Image from "next/image";
import star from "@/img/starSmol.png"

import style from "./marks.module.scss";

interface MarksProps{
    children: React.ReactNode;
}

const Marks = ({children}:MarksProps) =>{
    return(
        <div className={style.marks}>
            <Image src={star} alt=""/>
            <p>{children}</p>
        </div>
    )
}

export default Marks;