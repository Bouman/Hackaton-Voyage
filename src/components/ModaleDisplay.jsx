import ModaleMonuments from '../components/ModaleMonuments'
import monumentList from '../Data/MonumentList'

function ModaleDisplay({ id, openMouseOver, setOpenMouseOver }) {
  return (
    <>
      <ModaleMonuments id={id} openMouseOver={openMouseOver} />
    </>
  )
}
export default ModaleDisplay;