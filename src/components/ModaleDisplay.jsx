import ModaleMonuments from '../components/ModaleMonuments'
import monumentList from '../Data/MonumentList'

function ModaleDisplay({ id, openMouseOver, setOpenMouseOver, monumentPosition }) {
  return (
    <>
      <ModaleMonuments id={id} openMouseOver={openMouseOver} monumentPosition ={monumentPosition} />
    </>
  )
}
export default ModaleDisplay;