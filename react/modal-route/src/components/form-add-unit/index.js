import React from 'react'

import styles from './form-add-unit.module.scss'

class FormAddUnit extends React.Component {
  handleClose = () => {
    const { history, onClose } = this.props
    onClose ? onClose(history) : history.goBack()
  }

  render() {
    return (
      <div className={`${styles.modal} modal fade show d-block`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" onClick={this.handleClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormAddUnit
