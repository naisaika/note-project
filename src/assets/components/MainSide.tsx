import { useState } from 'react';
import style from '../scss/MainSide.module.scss'

export const MainSide = () => {
    const [inputText, setInputText] = useState<string>('');

    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    return (
        <div className={style.mainSection}>
            <div className={style.inputContainer}>
                <input type="text" value={inputText} placeholder='タイトルを入力' onChange={(e) =>onChangeTitle(e)}></input>
                <textarea placeholder='内容を入力'></textarea>
            </div>
            <div className={style.previewContainer}>
                <h2>新しいノート</h2>
                <p>内容を入力</p>
            </div>
        </div>
    )
}