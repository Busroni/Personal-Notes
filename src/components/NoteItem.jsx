import React from 'react';
import NoteItemBody from './NoteItemBody';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
 
function NoteItem({ title, body, id, createdAt, archived, onDelete, onArchive }) {
 
  function formatDate(createdAt) {
    const date = new Date(createdAt);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  }

  return (
   <div className="note-item">
     <NoteItemBody title={title} body={body} createdAt={formatDate(createdAt)} archived={archived}/>
     <div className="note-item__action">
        <div className="note-item__delete-button"><DeleteButton id={id} onDelete={onDelete} /></div>
        <div className="note-item__archive-button"><ArchiveButton id={id} onArchive={onArchive} archived={archived} /></div>
     </div>
       </div>
 );
}
 
export default NoteItem;