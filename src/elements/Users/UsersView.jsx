import React from "react";
import style from './users.module.css';
import { Link } from "react-router-dom";
import Paginatior from "./Ppaginator";


const UsersView = (props) => {
    const {totalUsers, pageSize, users, currentPage, follow, unfollow, changePage, followingQueue} = props;
    
    return <div className={style.container}>
        <div className={style.back}>
            <Link to="/">←</Link>
        </div >
        <Paginatior 
        pageSize={pageSize}
        currentPage={currentPage}
        changePage={changePage}
        totalItems={totalUsers}
        visiblePages={10} />
        <div className={style.usersList}>
            {
                users.map((user) => {
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
                                        onClick={() => unfollow(user.id)}
                                        disabled={followingQueue.some(id => id === user.id)}>
                                        Отписаться
                                    </button>
                                    : <button
                                        onClick={() => follow(user.id)}
                                        disabled={followingQueue.some(id => id === user.id)}>
                                        Подписаться
                                    </button>}
                            </div>

                        </div>
                    );
                })
            }
        </div>
    </div>
};

export default UsersView;