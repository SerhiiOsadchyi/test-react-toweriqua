import React from 'react';
import s from'./FAQ.module.css';

const FAQ = () => {
    return(
        <div className={s.faq}>
            <h2>Условия тестового задания</h2>
            <ol>
                <li>Есть json файл (прикреплён письму) в котором находятся данные о пользователях.</li>
                <li>Смоделировать запрос на сервер для получения списка пользователей при заходе на страницу списка пользователей.</li>
                <li>Данные сохранить в redux.</li>
                <li>Доставать данные из reducer.</li>
                <li>Сделать пагинацию на странице, по 5 элементов.</li>
                <li>Около списка раз в 8 секунд выводить (фамилия имя) одного из пользователей ( можно случайного или по списку).</li>
                <li>Добавить стили.</li>
                <li>Залить проект на github/gitlab/bitbucket. Тексты коммитов тоже важны.</li>
            </ol>
        </div>
    )
}

export default FAQ