
import style from '../scss/MainSide.module.scss'

interface MainSideProps {
    inputTitle: string;
    inputContent: string;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const MainSide = ({inputTitle, inputContent, onChangeTitle, onChangeContent}: MainSideProps) => {

    return (
        <div className={style.mainSection}>
            <div className={style.inputContainer}>
                <input type="text" value={inputTitle} placeholder='タイトルを入力' onChange={(e) =>onChangeTitle(e)}></input>
                <textarea placeholder='内容を入力' value={inputContent} onChange={(e) => onChangeContent(e)}></textarea>
            </div>
            <div className={style.previewContainer}>
                <h2>{inputTitle}</h2>
                <p>{inputContent}</p>
            </div>
        </div>
    )
}