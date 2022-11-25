import ModaleMonuments from '../components/ModaleMonuments'

function ModaleDisplay ({id, openMouseOver, setOpenMouseOver }) {
    return (
    <>
        <div className='main_div'>
                <ModaleMonuments id ={id} openMouseOver={openMouseOver} />
        </div>
    </>
    )
}
export default ModaleDisplay;