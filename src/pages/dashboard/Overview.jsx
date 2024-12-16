import useAuth from "../../hooks/useAuth"



const Overview = () => {
  const {user} = useAuth();
  return (
    <div className="flex items-center justify-center h-full w-2full">
      <h1 className="text-xl font-bold text-center">{user?.email}</h1> 
    </div>
  )
}

export default Overview

