import PropTypes from "prop-types"
import { Overlay, StyledDialog } from "./ModalZoomStyles"
import { IconButton } from "../Gallery/Image/ImageStyles"
import Image from "../Gallery/Image/Image"

ModalZoom.propTypes = {
    photo: PropTypes.object,
    onClose: PropTypes.func
}

export default function ModalZoom({ photo, onClose }) {
    return (
        <>
            {
                photo &&
                <>
                    <Overlay />
                    <StyledDialog
                        open={!!photo}
                        onClose={onClose}
                    >
                        <Image photo={photo} expanded={true} />
                        <form method="dialog">
                            <IconButton formMethod="dialog">
                                <img src="/assets/icons/fechar.png" alt="Icone de fechar" />
                            </IconButton>
                        </form>
                    </StyledDialog>
                </>
            }
            <dialog open>
                <p>Exemplo do Mozilla</p>
                <form method="dialog">
                    <button type="submit">ok</button>
                </form>
            </dialog>
        </>
    )
}