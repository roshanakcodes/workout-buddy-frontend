import { useWorkoutsContext } from '../hooks/useworkoutscontext'

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts` + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json })
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{new Date(workout.createdAt).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
            
            <span 
                className="material-symbols-outlined" 
                onClick={handleClick}
                style={{ fontFamily: "'Material Symbols Outlined'" }}
            >
                -
            </span>
        </div>
    )
}

export default WorkoutDetails
