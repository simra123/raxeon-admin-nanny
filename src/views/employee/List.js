import AvatarGroup from '@components/avatar-group'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import {Link} from 'react-router-dom'
import { MoreVertical, Edit, Trash } from 'react-feather'
import {  Card, CardTitle, CardBody, Table, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

// table data
const ALlEmployee = [
    {
        title: 'Peter Charles',
        image : avatar1,
        email : 'simrafcb@gmail.com'
    },
    {
        title: 'Peter Charles',
        image : avatar1,
        email : 'simrafcb@gmail.com'
    }
]


const EmployeeTable = () => {
  return (
    <Card>
      <CardBody>
      <CardTitle>All Employees</CardTitle>

    <Table responsive>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            ALlEmployee.map((value, index) => {
                return (
                <tr key={index}>
                <td>
                  <img src={value.image} class="rounded-circle" height="40" width="40" alt=""/>
                </td>
        
                <td>{value.title}</td>

                <td>{value.email}</td>
               
                
                <td>
                    <UncontrolledDropdown>
                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                        <MoreVertical size={15} />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href='/employee/form' onClick={e => e.preventDefault()}>
                        <Edit className='mr-50' size={15} />  <span className='align-middle'>Edit</span>
                        </DropdownItem>
                        <DropdownItem href='/' onClick={e => e.preventDefault()}>
                        <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </td>
                </tr>
                )
            })
        }
       
        
      </tbody>
    </Table>
    </CardBody>
    </Card>
  )
}

export default EmployeeTable
