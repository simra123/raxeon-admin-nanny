import { useState } from 'react'

import {  Card, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button, CustomInput } from 'reactstrap'
import avatar1 from '@src/assets/images/portrait/small/avatar-s-5.jpg'
import { MoreVertical, Edit, Trash } from 'react-feather'

// table data
const ALlCustomer = [
    {   id : 1,
        no : 1,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis odio vitae nisi accumsan',
        image : avatar1
    },
    {   no:2,
        id : 2,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis odio vitae nisi accumsan',
        image : avatar1
    },
    {   no:3,
        id : 3,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis odio vitae nisi accumsan',
        image : avatar1
    },
    {   no:4,
        id : 4,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis odio vitae nisi accumsan',
        image : avatar1
    }
]


const ServicesReviews = () => {
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
      <CardTitle>customers Reviews</CardTitle>

    <Table responsive>
      <thead>
        <tr>
          <th>Customer Image</th>
          <th>Customer Reviews</th>
          <th>Show</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            ALlCustomer.map((value, index) => {
                return (
                <tr key={index}>
                <td>
                  <img src={value.image} class="rounded-circle" height="60" width="60" alt=""/>
                </td>
        
                <td>{value.review}</td>

                <td>
                    <CustomInput
                    className='custom-control-secondary'
                    type='switch'
                    id={value.id}
                    name='secondary'
                    inline
                    defaultChecked
                    />
                </td>
               
                
                <td>
                <UncontrolledDropdown>
                    <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                        <MoreVertical size={15} />
                    </DropdownToggle>
                    <DropdownMenu right>
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

export default ServicesReviews
