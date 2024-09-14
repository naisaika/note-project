import './App.css'
import { useEffect, useState } from 'react';
import { SideBar } from './assets/components/SideBar'
import { MainSide } from './assets/components/MainSide'

interface NewNote {
  id: number,
  title: string,
  content: string,
  date: string
}

function App() {

  const [inputTitle, setInputTitle] = useState<string>('');
  const [inputContent, setInputContent] = useState<string>('')
  const [editNote, setEditNote] = useState<NewNote | undefined>(undefined);
  const [createNewNote, setCreateNewNote] = useState<NewNote[]>([]);
  const [isActiveNoteId, setIsActiveNoteId] = useState<number | undefined>(undefined);

  const addNote = () => {
      const newNote = {
          id: Date.now(),
          title: '',
          content: '',
          date: new Date().toLocaleDateString('ja-JP')
      }
      setCreateNewNote([...createNewNote, newNote])
      setInputTitle(newNote.title)
      setInputContent(newNote.content)
  }

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const editInputTitle = e.target.value;
      setInputTitle(editInputTitle)
      if (editNote) {
        const updatedNote = {
          ...editNote, // 既存のeditNoteをコピー
          title: editInputTitle // titleだけ更新
      };
      
      setEditNote(updatedNote);
      // createNewNoteの中でidがeditNoteと一致するものを更新
        const updatedNotes = createNewNote.map((note) =>
          note.id === updatedNote.id ? updatedNote : note
        );
        setCreateNewNote(updatedNotes); // 更新されたノートの配列をセット
      }
  }

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputContent(e.target.value);
    if(editNote) {
      const updateContent= {
        ...editNote,
        content: e.target.value
      }
      setEditNote(updateContent)

    const updateNotes = createNewNote.map((note) => 
      note.id === updateContent.id? updateContent: note
    )
      setCreateNewNote(updateNotes)
    }
  }

  const selectedNote = (noteid: number) => {
    const checkSelectedNote = createNewNote.find((id) => noteid === id.id);
    if (checkSelectedNote) {
        setEditNote(checkSelectedNote);
        setIsActiveNoteId(checkSelectedNote.id)
        setInputTitle(checkSelectedNote.title)
        setInputContent(checkSelectedNote.content)
    } else {
        setEditNote(undefined); 
        setIsActiveNoteId(undefined)
    }
  }

  const deleteNote = (noteid: number) => {
    const checkDeleteNote = createNewNote.filter((clickid) => clickid.id !== noteid)

    setTimeout(() => {
      if (checkDeleteNote.length > 0) {
        setInputTitle(checkDeleteNote[0].title);
        setEditNote(checkDeleteNote[0]);
        setIsActiveNoteId(checkDeleteNote[0].id); 
        setInputContent(checkDeleteNote[0].content)
      } else {
        setInputTitle('');
        setEditNote(undefined);
        setIsActiveNoteId(undefined); 
        setInputContent('');
      }
    }, 0); // 状態更新の次のイベントループで処理を行う
    setCreateNewNote(checkDeleteNote);
  }

  useEffect(() => {
    const firstNote = {
        id: Date.now(),
        title: '',
        content: '',
        date: new Date().toLocaleDateString('ja-JP')
    }
    setCreateNewNote([firstNote])
    setEditNote(firstNote);
    setIsActiveNoteId(firstNote.id)
}, []);

  return (
    <div className='allSection'>
      <SideBar inputTitle={inputTitle} addNote={addNote} selectedNote={selectedNote} 
        createNewNote={createNewNote} isActiveNoteId={isActiveNoteId} deleteNote={deleteNote}></SideBar>
      <MainSide inputTitle={inputTitle} onChangeTitle={onChangeTitle} onChangeContent={onChangeContent}
        inputContent={inputContent}></MainSide>
    </div>
  )
}

export default App