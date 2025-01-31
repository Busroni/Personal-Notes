import React from 'react';
import NoteList from './NoteList';
import { getInitialData } from '../utils/index';
import NoteInput from './NoteInput';
 
class NoteApp extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     notes: getInitialData(),
     searchQuery: '',
   }
   this.onSearchHandler = this.onSearchHandler.bind(this);
   this.onDeleteHandler = this.onDeleteHandler.bind(this);
   this.onArchiveHandler = this.onArchiveHandler.bind(this);
   this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
 }

 onSearchHandler(event) {
    this.setState({ searchQuery: event.target.value });
  }
 
 onDeleteHandler(id) {
   const notes = this.state.notes.filter(note => note.id !== id);
   this.setState({ notes });
 }

 
 onArchiveHandler(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

 onAddNoteHandler({ title, body, createdAt, archived }) {
  this.setState((prevState) => {
    return {
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt,
          archived,
        }
      ]
    }
  });
}
 
render() {
    const { notes, searchQuery } = this.state;

    // Filter notes berdasarkan searchQuery
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div>
        <div className="note-app__header"> 
            <h1>Notes</h1>
            <input className='note-search' type="text" placeholder="Search notes..." value={searchQuery} onChange={this.onSearchHandler}/>
        </div>
        <div className="note-app__body">
          <div className="note-input">
              <h2>Buat Catatan</h2>
              <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <h2>Active Notes</h2>
                <NoteList notes={filteredNotes.filter((note) => !note.archived)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                <h2>Archived Notes</h2>
                <NoteList notes={filteredNotes.filter((note) => note.archived)} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />

        </div>                
    </div>    
        );
    }
}

export default NoteApp;