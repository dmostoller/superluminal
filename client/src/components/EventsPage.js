import React, {useState, useEffect} from "react";
import EventsList from "./EventsList"
import { Link } from "react-router-dom";
import { useUser } from "../context/user";
import { useAdmin } from "../context/admin";

function EventsPage () {
    const [events, setEvents] = useState([])
    const { user } = useUser()
    const {isAdmin} = useAdmin()

    useEffect(() => {
      fetch(`/event`)
      .then((res) => res.json())
      .then((events) => {setEvents(events)})
    }, []);

    const date = new Date();
    const day = date.getDate() - 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${year}-${month}-${day}`
    // console.log(currentDate)

    const pastEvents = events
    .filter(event => {
        return Date.parse(event.event_date) < Date.parse(currentDate)
    })

    const upcomingEvents = events
    .filter(event => {
        return Date.parse(event.event_date) >= Date.parse(currentDate)
    })

    const sortedPastEvents = pastEvents.sort((a, b) => (a.event_date) > (b.event_date) ? -1 :1)
    const sortedUpcomingEvents = upcomingEvents.sort((a, b) => (a.event_date) < (b.event_date) ? -1 :1)

    const deleteEvent = (deleted_event) => setEvents(events => events.filter((event) => event.id !== deleted_event.id))

    return (
        <div className="ui container" style={{backgroundColor: "#303030"}} >
            <div className="ui middle aligned center aligned grid" style={{minHeight:"100vh", marginTop: "40px"}}>
                <div className="ui container">    
                    <h4  style={{marginTop: "30px"}} class="ui horizontal inverted divider">Upcoming Events</h4>
                    <EventsList events={sortedUpcomingEvents} isAdmin={isAdmin} deleteEvent={deleteEvent}/>
                </div>
                <div className="ui container" style={{marginBottom: "30px"}}>    
                    <h4  style={{marginTop: "30px"}} class="ui horizontal inverted divider">Past Events</h4>
                    <EventsList events={sortedPastEvents} isAdmin={isAdmin} deleteEvent={deleteEvent}/>
                </div>
            </div>
            { user && isAdmin &&
            <div className="ui grid container centered">
            <Link to={`/events/new`} style={{marginTop: "15px", marginBottom: "15px"}} className="ui circular icon secondary button"><i className="plus icon"></i></Link>
            </div>
            }
        </div>
    )
}

export default EventsPage