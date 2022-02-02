import { useState, useEffect } from 'react'
import { MoreVertical, Edit } from 'react-feather'
import { Link } from 'react-router-dom'
import Action from '../../../../middleware/API'
import baseURL from '../../../../middleware/BaseURL'


import { Card, CardTitle, CardBody, Table, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

const EmployeeList = () => {
  const [employeeImg, setEmployeeImg] = useState('')
  useEffect(() => {
    //using promise 
    const getImg = async () => {
      //if else
      try {
        const { data } = await Action.get('/employer')
        setEmployeeImg(data.data[0].image)
      } catch (error) {
        console.log(error)
      }
    }
    getImg()
  }, [])
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>For Customers</CardTitle>

          <Table responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>
                  <img src={ baseURL + employeeImg } height="100" width="100" />
                </td>
                <td>
                  <UncontrolledDropdown>
                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={ 15 } />
                    </DropdownToggle>
                    <DropdownMenu right>
                      <Link to="/frontend/app/employee/form">
                        <DropdownItem href='/' >

                          <Edit className='mr-50' size={ 15 } />  <span className='align-middle'>Edit</span>

                        </DropdownItem>
                      </Link>

                    </DropdownMenu>
                  </UncontrolledDropdown>

                </td>
              </tr>


            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  )
}
export default EmployeeList
