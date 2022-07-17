// import React, { useState, useEffect } from "react";
// // import DUMMY_DATA from "../Data/data";
// import MeetUpList from "../components/MeetUps/MeetUpList"

// const AllMeetUps = () => {

//     const [isLoading, setisLoading] = useState(false);
//     const [loadedMeetUps, setLoadedMeetUps] = useState();

//     useEffect(() => {
//         setLoadedMeetUps(true);
//         fetch('https://crash-react-94155-default-rtdb.firebaseio.com/meetups.json')
//         .then(
//             (response) => {
//                 return response.json();
//             }
//         ).then((data) => {
//             const Dummy = [];
//             for (const key in data) {
//                 const Dummy1 = {
//                     id:key,
//                     ...data[key]
//                 }
//                 Dummy.push(Dummy1);
//             }
//             setisLoading(false);
//             setLoadedMeetUps(Dummy)
//         });
//     }, []);

//     if (isLoading) {
//         return (<section>
//             <p> Loadiing ...</p>
//         </section>);
//     }

//     return (
//         <div>
//             <h1>All MeetUps</h1>
//             <ul>
//             <MeetUpList meetups={loadedMeetUps} />
//             </ul>
//         </div>
//     );
// };
// export default AllMeetUps;

import { useEffect, useState } from "react";
import MeetupListing from "../components/MeetUps/MeetUpList";

const AllMeetupsing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState();
  useEffect(()=>{
    setIsLoading(true);
    fetch(
      "https://crash-react-94155-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetupDummy=[];

        for(const key in data){
          const meeting={
            id:key,
            ...data[key]
          }
          meetupDummy.push(meeting)
        }
        setIsLoading(false);
        setLoadedMeetups(meetupDummy);
      });
  },[])

  if (isLoading) {
    return (
      <section>
        <h1>Loading.....</h1>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
        <MeetupListing meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetupsing;