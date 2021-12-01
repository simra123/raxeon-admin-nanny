import { useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { MoreVertical, Edit, Trash, User } from 'react-feather'


import {  Card, Spinner, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const products = [
    {  
      id:1,
      no : 1,
      proName : 'Headphones',
      proImage : 'https://nanny-frontend.netlify.app/static/media/headphones.57e3be39.jpg',
      price : '50$'
    },
    {  
        id:2,
        no : 2,
        proName : 'Selfie Stick',
        proImage : 'https://nanny-frontend.netlify.app/static/media/selfie-stick.4e27ea96.jpg',
        price : '50$'
    },
    {  
        id:3,
        no : 3,
        proName : 'Headphones',
        proImage : 'https://nanny-frontend.netlify.app/static/media/headphones.57e3be39.jpg',
        price : '50$'
    },
    {  
        id:4,
        no : 4,
        proName : 'Headphones',
        proImage : 'https://nanny-frontend.netlify.app/static/media/headphones.57e3be39.jpg',
        price : '50$'
      }
    
]
  const Banner = () => {
    const [modal, setModal] = useState(null)
    
    const toggleModalDanger = id => {
        if (modal !== id) {
          setModal(id)
        } else {
          setModal(null)
        }
      }

  
    return (
        <>
        <Card>
        <CardBody>
        <CardTitle>All Product List</CardTitle>
       
        <Table responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            products.map((value, index) => {
              return (
              <tr key={index}>
              <td>
                {value.no}
              </td>
              <td>{value.proName}</td>
              <td> <img className="rounded-circle" src={value.proImage}  width="80" height="80" alt=""/> </td>
              <td>{value.price}</td>

                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <DropdownItem href='/product/form' >
                      <Edit className='mr-50' size={15} />  <span className='align-middle'>Edit</span>
                      </DropdownItem>

                      <DropdownItem href='/' onClick={(e) => { 
                        e.preventDefault()  
                        toggleModalDanger(value.id) 
                        }}>
                      <Trash className='mr-50' size={15} /> <span className='align-middle'>Delete</span>
                      </DropdownItem>
                  </DropdownMenu>
                  </UncontrolledDropdown>
                  

                  {/* delete modal */}
                  <Modal
                    isOpen={modal === value.id}
                    toggle={() => toggleModalDanger(value.id)}
                    className='modal-dialog-centered'
                    modalClassName="modal-danger"
                    key={value.id}>
                    <ModalHeader toggle={() => toggleModalDanger(value.id)}>Delete</ModalHeader>
                    <ModalBody>
                    Are you sure you want to delete this?
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" onClick={() => toggleModalDanger(value.id)}>
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
  </>
    )
  }
  export default Banner
  