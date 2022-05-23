import React, { useState } from "react";
import style from './status.module.css';

const Status = (props) => {
    const [localStatus, setLocalStatus] = useState(props.status)

    if (props.editable) {
        const [editMode, setMode] = useState(false);

        const toggleEditMode = () => {
            setMode(prev => !prev);
        };

        const setStatus = () => {
            props.setStatus(localStatus);
            toggleEditMode();
        };

        const changeLocalStatus = (text) => {
            setLocalStatus(text)
        }

        return (
            <div className={style.status}>
                <div>
                    Статус:
                </div>
                {
                    editMode
                        ? <div>
                            <input
                                onBlur={setStatus}
                                onChange={e => changeLocalStatus(e.target.value)}
                                value={localStatus}
                                autoFocus={true}>
                            </input>
                        </div>
                        : <div className={style.status} onDoubleClick={toggleEditMode}>
                            <span>{localStatus}</span>
                        </div>
                }
            </div>
        );
    } else {
        return (
            <div className={style.status}>
                <div>
                    Статус:
                </div>
                <div className={style.status}>
                    <span>{localStatus}</span>
                </div>
            </div>
        );
    }
};

export default Status;