import PropTypes from "prop-types"

ModalZoom.propTypes = {
    photo: PropTypes.object,
}

export default function ModalZoom({ photo }) {
    return (
        <>
            <dialog open>
                <p>Exemplo do Mozilla</p>
                <form method="dialog">
                    <button type="submit">ok</button>
                </form>
            </dialog>
        </>
    )
}