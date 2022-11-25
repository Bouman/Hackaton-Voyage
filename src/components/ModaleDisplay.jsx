import ModaleMonuments from '../components/ModaleMonuments'
import monumentList from '../Data/MonumentList'

function ModaleDisplay({ id, openMouseOver, setOpenMouseOver }) {
  monumentList.map(e => {
    return (
      <img src={e.icon} alt={e.monumentSize}>
        <ModaleMonuments id={e.id} openMouseOver={openMouseOver} />
      </img>
    )
  })
}
export default ModaleDisplay;