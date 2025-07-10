import CategoryContainer from '../../components/CategoryContainer/CategoryContainer'
import {Outlet} from 'react-router-dom'
const Home = () => {
 
  return (
    <>
    <Outlet/>
    <CategoryContainer />
    </>
  )
}

export default Home
