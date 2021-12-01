import { useState } from 'react'
import '../../@core/scss/react/libs/editor/editor.scss'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import {VscSymbolColor} from 'react-icons/vsc'
import {IoColorWandOutline} from 'react-icons/io5'

import {  Card, CardHeader, Form, Spinner, Row, Col, Label, InputGroup, FormGroup, InputGroupAddon, InputGroupText, Input, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const colors = [
    {   id:0,
        name : 'red',
        code : '#ff0000'
    },
    {
        id:1,
        name : 'purple',
        code : '#800080'
    }
  
  
]
  const Colors = () => {
    const [modal, setModal] = useState(null)
    const [modal2, setModal2] = useState(null)

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
    return (
        <>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Add New Colors</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col sm='12' md="6">
                {/* color form */}
                <Label for='color'>Color Name</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <VscSymbolColor size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='color' placeholder='Enter your color name' />
                </InputGroup>
              </Col>
              <Col sm='12' md="6">
                {/* color form */}
                <Label for='code'>Color Code</Label>
                <InputGroup className='input-group-merge' tag={FormGroup}>
                <InputGroupAddon addonType='prepend'>
                    <InputGroupText>
                    <IoColorWandOutline size={15} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input type='text' name='name' id='code' placeholder='Enter your color code' />
                </InputGroup>
              </Col>
               <Col sm='12' className="">
                <FormGroup className='d-flex mb-0'>
                  <Button.Ripple className='mr-1' color='primary' type='submit' onClick={e => e.preventDefault()}>
                    Submit
                      {/* spinner */}
                      {/* <Spinner color='light' /> */}
                  </Button.Ripple>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
      <Card>
      <CardBody>
      <CardTitle>All Colors</CardTitle>

    <Table responsive>
      <thead>
        <tr>
          <th>Color Name</th>
          <th>Color Code</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
          colors.map((value, index) => {
              return (
              <tr key={index}>
              <td>
                {value.name}
              </td>
      
              <td>{value.code}</td>
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
                                <Col sm='12' md="6">
                                    {/* color form */}
                                    <Label for='color'>Color Name</Label>
                                    <InputGroup className='input-group-merge' tag={FormGroup}>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>
                                        <VscSymbolColor size={15} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' name='name' id='color' placeholder='Enter your color name' />
                                    </InputGroup>
                                </Col>
                                <Col sm='12' md="6">
                                    {/* color form */}
                                    <Label for='code'>Color Code</Label>
                                    <InputGroup className='input-group-merge' tag={FormGroup}>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>
                                        <IoColorWandOutline size={15} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' name='name' id='code' placeholder='Enter your color code' />
                                    </InputGroup>
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
  export default Colors
  