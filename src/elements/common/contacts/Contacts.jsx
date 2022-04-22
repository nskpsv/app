import React from "react";
import style from './Contacts.module.css';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import link from './assets/link.png';
import twitter from './assets/twitter.png';
import vk from './assets/vk.png';
import web from './assets/web.png';
import youtube from './assets/youTube.png';
import github from './assets/github.png';

let icons = [facebook, web, vk, twitter, instagram, youtube, github, link];

const Contacts = (props) => {
    return <div className={style.contacts}>
        {props.contacts.map((c, i) => {
            if (!!c) {
                return (
                    <a
                        href={c}
                        key={i}
                        className={style.icon}>
                        <img
                            src={icons[i]}
                            className={style.image} />
                    </a>
                );
            };
        })}
    </div>
};

export default Contacts;