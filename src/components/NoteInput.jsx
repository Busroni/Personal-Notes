import React from 'react';
 
class NoteInput extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          title: '',
          body: '',
          archived:'',
          createdAt:'',
        }
        this.maxTitleLength = 50;
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }

      onTitleChangeEventHandler(event) {
        const inputTitle = event.target.value;
        if (inputTitle.length <= this.maxTitleLength) {
          this.setState(() => ({
            title: inputTitle,
          }));
        }
      }
      
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        const currentDatetime = new Date().toISOString();
        this.props.addNote({
          ...this.state,
          createdAt: currentDatetime,
          archived: false, 
        });
    
        this.setState({
          title: '',
          body: '',
        });
      }

      render() {
        const remainingCharacters = this.maxTitleLength - this.state.title.length;

        return (
        <div className="note_input"> 
        <p className="character-count"> Remaining Tittle Characters: {remainingCharacters}</p>
          <form className='note-input' onSubmit={this.onSubmitEventHandler}>
            <input type="text" className="note-input__title" placeholder="Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <textarea placeholder="Body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <button type="submit">Buat</button>
          </form>
          </div>
        )
      }
     }
 
export default NoteInput;