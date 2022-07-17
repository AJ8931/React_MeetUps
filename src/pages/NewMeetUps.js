import React from "react";
import { useNavigate } from "react-router-dom"
import NewMeetUpForm from "../components/MeetUps/newMeetUpForm";

const NewMeetUps = () => {
    const history = useNavigate();
    const AddMeetUpHandler = (meetUpData) => {
        console.log(meetUpData);
        fetch('https://crash-react-94155-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetUpData),
                header: {
                    'Content.Type': 'application/json',
                }
            }
        ).then(()=>{
            history('/');
        });


    }

    return (<section>
        <h1>Add New MeetUps</h1>
        <NewMeetUpForm onaddMeetUp={AddMeetUpHandler} />
    </section>
    );
}
export default NewMeetUps;