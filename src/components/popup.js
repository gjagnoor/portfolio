import * as React from "react"
import Modal from "@material-ui/core/Modal/Modal"

export default function Modal(content, open, setOpen) {
  return (
    <React.Fragment>
      <Modal open={open} onClose={() => setOpen(false)}>
        {content}
      </Modal>
    </React.Fragment>
  )
}
