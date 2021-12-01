
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import {Link} from 'react-router-dom'


import {  Card, CardTitle, CardBody, Table, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const appCustomer = [
    {
      id:1,
      img :'https://nanny-frontend.netlify.app/static/media/app-thumb.b697cac1.png',
      heading : 'easy searching',
      link : '/playstore'
    }

]
  const Customers = () => {

    return (
        <>
        <Card>
        <CardBody>
        <CardTitle>For Customers</CardTitle>

        <Table responsive>
          <thead>
            <tr>
              <th>Image</th>
              <th>Heading</th>
              <th>Button Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
          appCustomer.map((value, index) => {
              return (
              <tr key={index}>
              <td>
               <img src={value.img} height="100" width="100" />
              </td>

                <td> {value.heading} </td>
                <td> {value.link} </td>
                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <Link to="/frontend/app/customer/form">
                        <DropdownItem href='/' >
                            
                        <Edit className='mr-50' size={15} />  <span className='align-middle'>Edit</span>
                        
                        </DropdownItem>
                      </Link>

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
  </>
    )
  }
  export default Customers
