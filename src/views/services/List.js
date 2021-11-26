import { useState } from 'react'

import {  Card, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import {Link} from 'react-router-dom'
import { MoreVertical, Edit, Trash } from 'react-feather'

// table data
const ALlServices = [
    {
        id: 0,
        title: 'Peter Charles',
        Image : avatar1
    },
    {   id: 1,
        title: 'Peter Charles',
        Image : avatar1
    }
]


const ServiceTable = () => {
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

export default ServiceTable
