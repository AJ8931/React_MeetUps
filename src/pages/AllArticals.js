import React, { useState, useEffect } from "react";
import MeetUpList from "../components/MeetUps/MeetUpList";

const AllArticals = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetUps, setLoadedMeetUps] = useState([]);

    useEffect(() => {
        fetch('https://crash-react-94155-default-rtdb.firebaseio.com/meetups.json')
            .then(response => response.json())
            .then(data => {
                const meetupsArray = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetupsArray.push(meetup);
                }
                setLoadedMeetUps(meetupsArray);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching meetups:', error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <div>
            <h1>Articals</h1>
            <MeetUpList meetups={loadedMeetUps} />
        </div>
    );
};

export default AllArticals;
