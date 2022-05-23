import React from "react";
import style from './users.module.css';
import { Link } from "react-router-dom";


const UsersView = (props) => {
    const count = 10
    const pages = [];
    for (let i = 1; i <= count; i++) {
        pages.push(i);
    };
    
    return <div className={style.container}>
        <div className={style.back}>
            <Link to="/">←</Link>
        </div >
        <div className={style.pages}>
            {pages.map(number => {
                return <span
                    key={number}
                    onClick={() => props.changePage(number)}
                    className={props.currentPage === number
                        ? style.currentPage
                        : undefined}>
                    {`[ ${number} ]`}
                </span>
            })}
        </div >
        <div className={style.usersList}>
            {
                props.users.map((user) => {
                    return (
                        <div key={user.id}>
                            <Link to={'/profile/' + user.id}>
                                <div >
                                    <img className={style.photo} src={user.photos.small != null
                                        ? user.photos.small
                                        : 'https://avatars.mds.yandex.net/i?id=e59578788a28c0fc9e7f3266cb1c5f3f-5859771-images-thumbs&n=13'} />
                                </div>
                                <div>
                                    <div>
                                        Имя {user.name}
                                    </div>
                                    <div>
                                        id {user.id}
                                    </div>
                                    <div>
                                        Статус {user.status}
                                    </div>
                                </div>
                            </Link>
                            <div>
                                {user.followed
                                    ? <button
                                        onClick={() => props.unfollow(user.id)}
                                        disabled={props.followingQueue.some(id => id === user.id)}>
                                        Отписаться
                                    </button>
                                    : <button
                                        onClick={() => props.follow(user.id)}
                                        disabled={props.followingQueue.some(id => id === user.id)}>
                                        Подписаться
                                    </button>}
                            </div>

                        </div>
                    )
                })
            }
        </div>
    </div>
};

export default UsersView;