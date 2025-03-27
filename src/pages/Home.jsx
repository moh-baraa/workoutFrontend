import { useEffect, useState } from "react"
import ax from 'axios'
// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"
const Home = () => {
    const [workouts, setWorkouts] = useState(null)
    const [show, setShow] = useState(false)// to initiate the use effect
    useEffect(() => {
        const fetchWorkouts = async () => {
            try {
                let response = await ax.get(import.meta.env.VITE_URI + "/api/workouts");
                setWorkouts(response.data)
            } catch (err) {
                console.log(`ERROR! ${err}`);
            }

        }
fetchWorkouts()
    },[show])
    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map(workout => ( //will not go to the function unless there workouts exist
                    <WorkoutDetails workout={workout} setShow={setShow} show={show} key={workout._id}/>
                ))}
            </div>
            <WorkoutForm setShow={setShow} show={show}/>
        </div>
    )
}
export default Home