import React from 'react'

const Bank = (props) => {
  return (
    <div className="row g-3">
    <div className="col-md-2">
      <label className="form-label">Bank Name</label>
      <input
        type="text"
        className="form-control"
        name="bank_name"
        onChange={props.onChange}
      />
    </div>
    <div className="col-md-4">
      <label className="form-label">Account Holder Name as per Bank A/C</label>
      <input
        type="text"
        className="form-control"
        name="acc_holder_name"
        onChange={props.onChange}
      />
    </div>
    <div className="col-md-3">
      <label className="form-label">Bank Account No</label>
      <input
        type="text"
        className="form-control"
        name="bank_acc_num"
        onChange={props.onChange}
      />
    </div>
    <div className="col-md-3">
      <label className="form-label">Confirm Account No</label>
      <input
        type="text"
        className="form-control"
        name="confirm_bank_acc_num"
        onChange={props.onChange}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">IFSC Code</label>
      <input
        type="text"
        className="form-control"
        name="ifsc_code"
        onChange={props.onChange}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">Confirm IFSC Code</label>
      <input
        type="text"
        className="form-control"
        name="confirm_ifsc_code"
        onChange={props.onChange}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">Upload Copy Of Passbook/Cancelled Check in Support </label>
      <input
        type="file"
        className="form-control"
        name="passbook_copy"
        onChange={props.onChange}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label">Upload One Scan Copy Of Id Proof </label>
      <input
        type="file"
        className="form-control"
        name="pic"
        onChange={props.onChange}
      />
    </div>
  </div>
  )
}

export default Bank
