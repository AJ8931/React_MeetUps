import Card from '../UI/card';
import { useRef } from 'react';
import classes from './newMeetUpForm.module.css';

const NewMeetUpForm = (props) => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
    // for reading ref is useful
        event.preventDefault();
        const enterTitle=titleInputRef.current.value;
        const enterimage=imageInputRef.current.value;
        const enteraddress=addressInputRef.current.value;
        const enterdescription=descriptionInputRef.current.value;

        const meetUpData={
            title: enterTitle,
            image: enterimage,
            address:enteraddress,
            description: enterdescription

        }
        props.onaddMeetUp(meetUpData);

    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler} >
                <div className={classes.control} >
                    <label htmlFor='title' >Title</label>
                    <input type="text" id="title" required ref={titleInputRef} />
                </div>
                <div className={classes.control} >
                    <label htmlFor='image' >Image</label>
                    <input type="url" id="image" ref={imageInputRef} />
                </div>
                <div className={classes.control} >
                    <label htmlFor='address' >Address</label>
                    <input type="text" id="address" ref={addressInputRef} />
                </div>
                <div className={classes.control} >
                    <label htmlFor='description' >Description</label>
                    <textarea type="text" id="description" rows={5} ref={descriptionInputRef} />
                </div>
                <div className={classes.actions}>
                    <button> Add to MeetUps</button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetUpForm;