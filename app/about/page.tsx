import Image from 'next/image';
import Link from 'next/link';
import about from '@/img/about.png';
import style from './about.module.scss';


const About = () =>{
    return(
        <div className='container'>
        <div className={style.main}>
            <div className={style.right}>
                <Image src={about} alt=''/>
            </div>
            <div className={style.left}>
                <h2>О нашем театре</h2>
                <p>Мы гордимся нашей историей, нашими 
                    спектаклями и наградами. Наш театр – это место, 
                    где каждый может найти что-то особенное, где 
                    воплощаются мечты и сбываются фантазии. Добро 
                    пожаловать в мир искусства и волшебства на 
                    страницах нашего театра!</p>
                <div className={style.snc}>
                    <p>Наши социальные сети:</p>
                    <div className={style.snc__item}>
                        <Link href="#">
                            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.5 0C10.9689 0 0 10.9689 0 24.5C0 38.0311 10.9689 49 24.5 49C38.0311 49 49 38.0311 49 24.5C49 10.9689 38.0311 0 24.5 0ZM33.9223 27.6416C33.9223 27.6416 36.089 29.7803 36.6224 30.773C36.6377 30.7934 36.6454 30.8139 36.6505 30.8241C36.8674 31.189 36.9184 31.4723 36.8113 31.6841C36.6326 32.0363 36.0201 32.2098 35.8108 32.2252H31.9827C31.7173 32.2252 31.1609 32.1562 30.4872 31.6918C29.9691 31.3294 29.4587 30.7347 28.961 30.1554C28.2184 29.2928 27.5753 28.5476 26.927 28.5476C26.8447 28.5475 26.7629 28.5604 26.6846 28.5859C26.1946 28.7441 25.5668 29.4434 25.5668 31.3064C25.5668 31.8883 25.1074 32.2226 24.7833 32.2226H23.03C22.4328 32.2226 19.3218 32.0133 16.5656 29.1065C13.1917 25.5464 10.1547 18.4056 10.1292 18.3393C9.93781 17.8773 10.3334 17.6298 10.7647 17.6298H14.6311C15.1466 17.6298 15.3151 17.9437 15.4324 18.2219C15.5703 18.546 16.0756 19.8348 16.905 21.2844C18.2499 23.6476 19.0743 24.6072 19.7353 24.6072C19.8592 24.6057 19.9809 24.5742 20.09 24.5153C20.9526 24.0355 20.7918 20.9603 20.7535 20.3222C20.7535 20.2023 20.751 18.9467 20.3095 18.3444C19.993 17.908 19.4545 17.7421 19.1279 17.6808C19.2601 17.4984 19.4343 17.3505 19.6357 17.2495C20.2278 16.9535 21.2946 16.9101 22.3537 16.9101H22.9432C24.0917 16.9254 24.3877 16.9994 24.8037 17.1041C25.6459 17.3057 25.6638 17.8493 25.5897 19.7097C25.5668 20.238 25.5438 20.8352 25.5438 21.5396C25.5438 21.6927 25.5361 21.856 25.5361 22.0296C25.5106 22.9764 25.48 24.0508 26.1486 24.4923C26.2359 24.547 26.3366 24.5762 26.4396 24.5766C26.6718 24.5766 27.3711 24.5766 29.2647 21.3278C29.8487 20.2821 30.3562 19.1954 30.7832 18.0764C30.8215 18.0101 30.9338 17.8059 31.0665 17.7268C31.1644 17.6768 31.273 17.6514 31.383 17.6528H35.9282C36.4233 17.6528 36.7628 17.7268 36.8266 17.9182C36.9389 18.2219 36.8061 19.1483 34.7313 21.9581L33.8049 23.1806C31.924 25.6459 31.924 25.7709 33.9223 27.6416Z" fill="black" />
                            </svg>
                        </Link>
                        <Link href="#">
                            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.5 0C10.976 0 0 10.976 0 24.5C0 38.024 10.976 49 24.5 49C38.024 49 49 38.024 49 24.5C49 10.976 38.024 0 24.5 0ZM35.868 16.66C35.5005 20.531 33.908 29.939 33.0995 34.2755C32.7565 36.113 32.0705 36.7255 31.4335 36.799C30.0125 36.9215 28.9345 35.868 27.5625 34.9615C25.4065 33.5405 24.1815 32.6585 22.099 31.2865C19.6735 29.694 21.2415 28.812 22.638 27.391C23.0055 27.0235 29.2775 21.315 29.4 20.8005C29.417 20.7226 29.4148 20.6417 29.3934 20.5648C29.3721 20.488 29.3323 20.4175 29.2775 20.3595C29.1305 20.237 28.9345 20.286 28.763 20.3105C28.5425 20.3595 25.1125 22.638 18.424 27.146C17.444 27.8075 16.562 28.1505 15.778 28.126C14.896 28.1015 13.23 27.636 11.9805 27.2195C10.437 26.7295 9.2365 26.46 9.3345 25.6025C9.3835 25.1615 9.996 24.7205 11.1475 24.255C18.3015 21.1435 23.0545 19.0855 25.431 18.1055C32.242 15.2635 33.6385 14.7735 34.5695 14.7735C34.7655 14.7735 35.231 14.8225 35.525 15.0675C35.77 15.2635 35.8435 15.533 35.868 15.729C35.8435 15.876 35.8925 16.317 35.868 16.66Z" fill="black" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.svg}>
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

export default About