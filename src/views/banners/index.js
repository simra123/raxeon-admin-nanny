import { useState } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { MoreVertical, Edit, Trash, User } from 'react-feather'


import {  Card, Spinner, Form, Row, Col, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const banner = [
    {  
      id:1,
      no : 1,
      image : 'https://nanny-frontend.netlify.app/static/media/banner-two.d53beaaf.jpg'
    },
    {  
      id:2,
      no : 2,
      image : 'https://images.pexels.com/photos/6974315/pexels-photo-6974315.jpeg?cs=srgb&dl=pexels-cottonbro-6974315.jpg&fm=jpg'
    }
    
]
  const Banner = () => {
    const [modal, setModal] = useState(null)
    const [modal2, setModal2] = useState(null)
    const [modal3, setModal3] = useState(null)

    const toggleModalDanger = id => {
      if (modal !== id) {
        setModal(id)
      } else {
        setModal(null)
      }
    }
    const toggleModalPrimary = id => {
        if (modal2 !== id) {
          setModal2(id)
        } else {
          setModal2(null)
        }
      }
      const toggleAddNew = id => {
        if (modal3 !== id) {
          setModal3(id)
        } else {
          setModal3(null)
        }
      }
    //file uploader
    const [img, setImg] = useState(null)

    const uppy = new Uppy({
      meta: { type: 'avatar' },
      restrictions: { maxNumberOfFiles: 1 },
      autoProceed: true
    })
  
    uppy.use(thumbnailGenerator)
  
    uppy.on('thumbnail:generated', (file, preview) => {
      setImg(preview)
    })
    return (
        <>
        <Card>
        <CardBody>
        <CardTitle>All Banners </CardTitle>
        <div className="float-right mb-2">
          <Button color="primary" onClick={() => toggleAddNew(0)}>
            Add new Banner
          </Button>
          <Modal
            isOpen={modal3 === 0}
            toggle={() => toggleAddNew(0)}
            className='modal-dialog-centered'
            modalClassName="modal-primary"
            key={0}>
            <ModalHeader toggle={() => toggleAddNew(0)}>Edit</ModalHeader>
            <ModalBody>
                <Form>
                    <Row>
                      <Col sm='12' className="mt-2">
                        {/* basic image upload */}
                      
                        <h6> Upload Banner </h6>
                          <DragDrop uppy={uppy} />
                          {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
                      </Col>
                        
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                            
            <Button color="primary" onClick={() => toggleAddNew(0)}>
              Submit
                {/* spinner */}
                {/* <Spinner color='light' /> */}
            </Button>
          </ModalFooter>
        </Modal>
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Banners</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
          banner.map((value, index) => {
              return (
              <tr key={index}>
              <td>
                {value.no}
              </td>
      
              <td> <img src={value.image}  width="200" height="100" alt=""/> </td>
                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <DropdownItem href='/'  onClick={(e) => { 
                        e.preventDefault()  
                        toggleModalPrimary(value.id) 
                        }}>
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
                  <Modal
                    isOpen={modal2 === value.id}
                    toggle={() => toggleModalPrimary(value.id)}
                    className='modal-dialog-centered'
                    modalClassName="modal-primary"
                    key={value.id}>
                    <ModalHeader toggle={() => toggleModalPrimary(value.id)}>Edit</ModalHeader>
                    <ModalBody>
                       <Form>
                            <Row>
                              <Col sm='12' className="mt-2">
                                {/* basic image upload */}
                              
                                <h6> Upload Banner </h6>
                                  <DragDrop uppy={uppy} />
                                  {img !== null ? <img className='rounded mt-2' src={img} alt='avatar' /> : null}
                              </Col>
                               
                            </Row>
                       </Form>
                    </ModalBody>
                    <ModalFooter>
                            
                      <Button color="primary" onClick={() => toggleModalPrimary(value.id)}>
                        Submit
                          {/* spinner */}
                          {/* <Spinner color='light' /> */}
                      </Button>
                    </ModalFooter>
                  </Modal>

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
  