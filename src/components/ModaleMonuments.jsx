import ModaleCardMonuments from './ModaleCardMonument'

function ModaleMonuments ({id, openMouseOver, setOpenMouseOver }) {
    return (
    <>
        <div className='main_div'
        >
                <button
                onClick= {()=>setOpenMouseOver(id)}
                >blabla</button>
                <ModaleCardMonuments id ={id} openMouseOver={openMouseOver} setOpenMouseOver={setOpenMouseOver} />
        </div>
    </>
    )
}
export default ModaleMonuments;