
import GridLoader from './../../node_modules/react-spinners/cjs/GridLoader.d';

const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen min-w-screen'>
      <GridLoader
        color='000000'
        loading={true}
        size={150}     
      />
    </div>
  )
}

export default Loading
