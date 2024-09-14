import { Button } from '../parts/Button'
import style from '../scss/SideBar.module.scss'

interface NewNote {
    id: number,
    title: string,
    content: string,
    date: string
}

interface inputTitleProps {
    inputTitle: string;
    addNote: () => void;
    selectedNote: (noteid: number) => void;
    createNewNote: NewNote[];
    isActiveNoteId: number | undefined;
    deleteNote: (noteid: number) => void;
}

export const SideBar = ({addNote, selectedNote, createNewNote, isActiveNoteId, deleteNote}: inputTitleProps) => {

    return (
        <div className={style.sideBarSec}>
            <div className={style.titleContainer}>
                <h1>ノート</h1>
                <Button onClick={addNote}>追加</Button>
            </div>
           <ul className={style.noteList}>
           {createNewNote.map((note) => {
            const active = note.id === isActiveNoteId
            return (
                <li key={note.id} onClick={() => selectedNote(note.id)} className={`${style.eachList} ${active? style.listActive: ''}`}>
                    <div>
                        <h2>{note.title}</h2>
                        <Button onClick={() => deleteNote(note.id)}>削除</Button>
                    </div>
                    <p className={style.content}>{note.content}</p>
                    <small>{note.date}</small>
                </li>
            )
           })}
            </ul>
        </div>
    )
}
