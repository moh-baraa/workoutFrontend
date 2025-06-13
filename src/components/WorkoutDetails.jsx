import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import ax from 'axios'
import { MdDelete } from "react-icons/md";

const WorkoutDetails = ({ workout, show, setShow }) => {

    const users = JSON.parse(localStorage.getItem('user'))
    const handleClick = async () => {

        await ax.delete(import.meta.env.VITE_URI + '/api/workouts/' + workout._id, {headers:{
            'Authorization': `Bearer ${users.token}`
        }})

            setShow(!show)// when show changed ,use effect will be enabled

    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Number of reps: </strong> {workout.reps}</p>
            <p>{formatDistanceToNow(workout.createdAt, { addSuffix: true })}</p>
            <span><MdDelete onClick={handleClick} style={{ fontSize: '20px', color: 'red' }} /></span>
        </div>
    )
}

export default WorkoutDetails
