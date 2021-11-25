import AvatarGroup from '@components/avatar-group'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import {Link} from 'react-router-dom'
import { MoreVertical, Edit, Trash } from 'react-feather'
import {  Card, CardTitle, CardBody, Table, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'

// table data
const ALlServices = [
    {
        title: 'Peter Charles',
        Image : avatar1
    },
    {
        title: 'Peter Charles',
        Image : avatar1
    }
]


const ServiceTable = () => {
  return (
    <Card>
      <CardBody>
      <CardTitle>All Services</CardTitle>

    <Table responsive>
      <thead>
        <tr>
          <th>Service Name</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            ALlServices.map((value, index) => {
                return (
                <tr key={index}>
        
                <td>{value.title}</td>
                <td>
                <img src={value.Image} class="rounded-circle" height="40" width="40" alt=""/>
                </td>
                
                <td>
                    <UncontrolledDropdown>
                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                        <MoreVertical size={15} />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href='/services/form' onClick={e => e.preventDefault()}>
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

export default ServiceTable
