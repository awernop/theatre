import styles from "./sort.module.scss";

interface SortProps {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Sort = ({children, onClick}: SortProps) =>{
    return(
    <button onClick={onClick} className={styles.main}>
        {children}
    </button>
    )
}

export default Sort;