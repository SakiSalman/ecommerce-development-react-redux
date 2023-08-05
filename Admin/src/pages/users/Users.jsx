import React from 'react'
import Avatar from '../../components/Admin/Profile/Avatar'
import ModalPopup from '../../components/Modal/ModalPopup'
import DataTable from 'datatables.net-dt'
import { useEffect } from 'react'
import UserTable from '../../components/Admin/Tables/UserTable'

const Users = () => {
    useEffect(() => {
        new DataTable('.table');
      })
  return (
    <>
    <div className="content container-fluid">

        <div className="row">
        <div className="col-md-12">
          {/* Recent Orders */}
          <button className="btn btn-primary mb-3" data-target="#userModalPopup" data-toggle='modal'>Add New User</button>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Appointment List</h4>
            </div>
            <div className="card-body">
              <UserTable></UserTable>
            </div>
          </div>
          {/* /Recent Orders */}
        </div>
      </div>
    </div>
    
        {/* Modal Popup */}
        <ModalPopup target={"userModalPopup"}>
            <p>Popup</p>
        </ModalPopup>
    </>
  )
}

export default Users