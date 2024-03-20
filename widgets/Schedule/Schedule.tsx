import Marks from '@/shared/Marks/Marks';

import style from './schedule.module.scss';

const Schedule = (schedule: {id: any, day: any, month: any, title: any, time: any, neww: any}) =>{
    const {id, day, month, title, time, neww} = schedule;
    
    return(
    <div className={style.main}>
        <div className={style.date}>
            <span className={style.date__day}>{day}</span>
            <span className={style.date__month}>{month}</span>
        </div>
        <div className={style.more}>
            <div className={style.title}>
                <span>{title}</span>
                {neww == true ? <Marks>Премьера</Marks> : null}
            </div>
            <span className={style.more__time}>{time}</span>
        </div>
    </div>
    )
}

export default Schedule;