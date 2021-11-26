import { useState } from 'react'

import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import {Link} from 'react-router-dom'
import { MoreVertical, Edit, Trash } from 'react-feather'
import {  Card, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

// table data
const ALlEmployee = [
    {  id:0,
        icon : avatar1,
        name : 'categories',
        descp:'lorem ipsum bonjour '
    },
    {
      id:1,
        icon : avatar1,
        name : 'categories',
        descp:'lorem ipsum bonjour '
    },
    {
       id:2,
        icon : avatar1,
        name : 'categories',
        descp:'lorem ipsum bonjour '
    }
  
]


const CategoryTable = () => {
  const [modal, setModal] = useState(null)

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }
  return (
    <Card>
      <CardBody>
      <CardTitle>All Customers</CardTitle>

    <Table responsive>
      <thead>
        <tr>
          <th>Icon</th>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            ALlEmployee.map((value, index) => {
                return (
                <tr key={index}>
                <td>
                  <img src={value.icon} class="rounded-circle" height="40" width="40" alt=""/>
                </td>
        
                <td>{value.name}</td>

                <td>{value.descp}</td>
               
                
                <td>
                    <UncontrolledDropdown>
                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                        <MoreVertical size={15} />
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href='/employee/form' onClick={e => e.preventDefault()}>
                        <Edit className='mr-50' size={15} />  <span className='align-middle'>Edit</span>
                        </DropdownItem>
                        <DropdownItem href='/' onClick={(e) => { 
                          e.preventDefault()  
                          toggleModal(value.id) 
                          }}>
                        <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                    <Modal
                      isOpen={modal === value.id}
                      toggle={() => toggleModal(value.id)}
                      className='modal-dialog-centered'
                      modalClassName="modal-danger"
                      key={value.id}>
                      <ModalHeader toggle={() => toggleModal(value.id)}>Delete</ModalHeader>
                      <ModalBody>
                      Are you sure you want to delete this?
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" onClick={() => toggleModal(value.id)}>
                          delete
                        </Button>
                      </ModalFooter>
                    </Modal>
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

export default CategoryTable
