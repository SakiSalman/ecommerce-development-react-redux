import React, { useEffect } from 'react'
import Avatar from '../../Profile/Avatar'
import DataTable from 'datatables.net-dt'
import UserTable from '../../Tables/UserTable'
const AdminDash = () => {
  useEffect(() => {
    new DataTable('.table');
  })
  return (
    <>
    
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="page-title">Welcome Admin!</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item active">Dashboard</li>
            </ul>
          </div>
        </div>
      </div>

      {/* /Page Header */}

      <div className="row">
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-primary border-primary">
                  <i className="fe fe-users" />
                </span>
                <div className="dash-count">
                  <h3>168</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Doctors</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-primary w-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-success">
                  <i className="fe fe-credit-card" />
                </span>
                <div className="dash-count">
                  <h3>487</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Patients</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-success w-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-danger border-danger">
                  <i className="fe fe-money" />
                </span>
                <div className="dash-count">
                  <h3>485</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Appointment</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-danger w-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 col-12">
          <div className="card">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-warning border-warning">
                  <i className="fe fe-folder" />
                </span>
                <div className="dash-count">
                  <h3>$62523</h3>
                </div>
              </div>
              <div className="dash-widget-info">
                <h6 className="text-muted">Revenue</h6>
                <div className="progress progress-sm">
                  <div className="progress-bar bg-warning w-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
  <div className="col-sm-12">
    <div className="card">
      <div className="card-header">
        <h4>All Users</h4>
      </div>
      <div className="card-body">
        <UserTable></UserTable>
      </div>
    </div>
  </div>			
</div>

    </div>		
    
    </>
  )
}

export default AdminDash