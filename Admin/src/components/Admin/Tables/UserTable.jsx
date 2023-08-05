import React from 'react'
import Avatar from '../Profile/Avatar'

const UserTable = () => {
  return (
    <>

<div className="table-responsive p-3">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Doctor Name</th>
                      <th>Speciality</th>
                      <th>Patient Name</th>
                      <th>Apointment Time</th>
                      <th>Status</th>
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar avatar-sm mr-2">
                            <Avatar></Avatar>
                          </a>
                          <a href="profile.html">Dr. Ruby Perrin</a>
                        </h2>
                      </td>
                      <td>Dental</td>
                      <td>
                        <h2 className="table-avatar">
                          <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src="assets/img/patients/patient1.jpg" alt="User Image" /></a>
                          <a href="profile.html">Charlene Reed </a>
                        </h2>
                      </td>
                      <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                      <td>
                        <div className="status-toggle">
                          <input type="checkbox" id="status_1" className="check" defaultChecked />
                          <label htmlFor="status_1" className="checktoggle">checkbox</label>
                        </div>
                      </td>
                      <td className="text-right">
                        $200.00
                      </td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
    </>
  )
}

export default UserTable