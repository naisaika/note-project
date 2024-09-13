import { useState } from 'react';
import { Button } from '../parts/Button'
import style from '../scss/SideBar.module.scss'

interface NewNote {
    id: number,
    title: string,
    content: string,
    date: number
}

export const SideBar = () => {
    const [createNewNote, setCreateNewNote] = useState<NewNote[]>([]);

    const addNote = () => {
        const newNote = {
            id: Date.now(),
            title: '新しいノート',
            content: '新しい内容',
            date: Date.now()
        }
        setCreateNewNote([...createNewNote, newNote])
    }

    const deleteNote = (noteid: number) => {
        const checkDeleteNote = createNewNote.filter((clickid) => clickid.id !== noteid)
        setCreateNewNote(checkDeleteNote)
    }

    return (
        <div className={style.sideBarSec}>
            <div className={style.titleContainer}>
                <h1>ノート</h1>
                <Button onClick={addNote}>追加</Button>
            </div>
           <ul className={style.noteList}>
           {createNewNote.map((note) => {
            return (
                <li key={note.id}>
                    <div>
                        <h2>{note.title}</h2>
                        <Button onClick={() => deleteNote(note.id)}>削除</Button>
                    </div>
                    <p>{note.content}</p>
                    <small>{note.date}</small>
                </li>
            )
           })}
            </ul>
        </div>
    )
}
