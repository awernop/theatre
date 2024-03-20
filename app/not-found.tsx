import Button from "@/shared/Button/Button";

import styles from "@/app/not-found.module.scss";

const NotFound = () => {
    return(
        <div className={styles.notfoud}>
           <div className={styles.notfound__1}>
                <div className={styles.heading}>
                    <h2 className={styles.heading__txt}>404</h2>
                </div>
                <div className={styles.noname}>
                    <p className={styles.txt}><b>Страница не найдена.</b> Приносим свои извенения за доставленные неудобства</p>
                    <Button href="/">Вернуться на главную</Button>
                </div>
                <div className={styles.svg}>
                    <svg width="1042" height="1042" viewBox="0 0 1042 1042" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_702_1953)">
                            <circle cx="521" cy="521" r="371" fill="#A21717" fill-opacity="0.42" />
                        </g>
                        <defs>
                            <filter id="filter0_f_702_1953" x="0" y="0" width="1042" height="1042" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_702_1953" />
                            </filter>
                        </defs>
                    </svg>
                </div>
           </div>
        </div>
    )
}

export default NotFound;