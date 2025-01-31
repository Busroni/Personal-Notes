import React from 'react';
import NoteItem from './NoteItem';
 
function NoteList({ notes, onDelete, onArchive}) {
    console.log(notes)
  return (
    <div className="notes-list">
      {
        notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem 
          key={note.id}
          id={note.id}
          onArchive={onArchive}
          onDelete={onDelete}
          {...note} />
        ))
        ) : (
        <p className="notes-list__empty-message">No notes available</p>
      )}
    </div>
  );
}
 
export default NoteList;