import { useState } from 'react'
import { MoreVertical, Edit, User } from 'react-feather'
import {BsFillMenuButtonFill} from 'react-icons/bs'
import {FaTextWidth} from 'react-icons/fa'
import {  Card, CustomInput, Spinner, Form, Row, Col, Label, InputGroup, FormGroup, InputGroupAddon, InputGroupText, Input, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const header = [
    {   id:0,
        text : "looking for a babysitter?",
        image : 'https://nanny-frontend.netlify.app/static/media/baby-icon.06b14fb2.png',
        btnText : 'click me'
    }
  
]
  const Header = () => {
    const [modal2, setModal2] = useState(null)


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
      <CardBody>
      <CardTitle>Header</CardTitle>

    <Table responsive>
      <thead>
        <tr>
          <th>Text</th>
          <th>Image</th>
          <th>Button Text</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {
          header.map((value, index) => {
              return (
              <tr key={index}>
              <td>
                {value.text}
              </td>
      
              <td> <img src={value.image} height="40" width="40" /></td>
              <td>{value.btnText}</td>
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
                                <Col sm='12' >
                                    {/* color form */}
                                    <Label for='text'>Header Text</Label>
                                    <InputGroup className='input-group-merge' tag={FormGroup}>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>
                                        <FaTextWidth size={15} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' id='text' placeholder='Enter your text' />
                                    </InputGroup>
                                </Col>
                                <Col  sm='12'>
                                    <FormGroup>
                                    <Label for='icon'>Header Image</Label>
                                    <CustomInput type='file' id='icon' name='customFile' />
                                    </FormGroup>
                                </Col>
                                <Col sm='12' >
                                    {/* color form */}
                                    <Label for='btn'>Button Text</Label>
                                    <InputGroup className='input-group-merge' tag={FormGroup}>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>
                                        <BsFillMenuButtonFill size={15} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' id='btn' placeholder='Enter your button text' />
                                    </InputGroup>
                                </Col>
                                <Col sm='12' >
                                    {/* color form */}
                                    <Label for='url'>Button Url</Label>
                                    <InputGroup className='input-group-merge' tag={FormGroup}>
                                    <InputGroupAddon addonType='prepend'>
                                        <InputGroupText>
                                        <BsFillMenuButtonFill size={15} />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' id='url' placeholder='Enter your button link' />
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
  export default Header
  