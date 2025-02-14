import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";


const WorkoutsTable = ({workouts}) => {
  return (
    <table className='table table-striped text-center'>
        <thead>
            <tr>
                <th className='border'>No</th>
                <th className='border'>Workout</th>
                <th className='border'>Loade</th>
                <th className='border'>Reps</th>
                <th className='border'>Operations</th>
            </tr>
        </thead>
        <tbody>
            {workouts.map((workout, index) => (
                <tr key={workout._id} className='h-8'>
                    <td className='border'>
                        {index + 1}
                    </td>
                    <td className='border'>
                        {workout.workout}
                    </td>
                    <td className='border'>
                        {workout.load}
                    </td>
                    <td className='border'>
                        {workout.reps}
                    </td>
                    <td className='border'>
                        <div className='flex justify-center gap-x-4'>
                            <Link to={`/workouts/delete/${workout._id}`}>
                            <MdOutlineDelete className='mx-3' />
                            </Link>
                        </div>
                    </td>
                    

                </tr>
            ))}
        </tbody>

    </table>
  )
}

export default WorkoutsTable