
import { useEffect, useState } from 'react'
import { MoreVertical, Edit, User } from 'react-feather'
import { BsFillMenuButtonFill } from 'react-icons/bs'
import { FaTextWidth } from 'react-icons/fa'
import { Card, CustomInput, Spinner, Form, Row, Col, Label, InputGroup, FormGroup, InputGroupAddon, InputGroupText, Input, CardTitle, CardBody, Table, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'
import Action from '../../../middleware/API'
import baseURL from '../../../middleware/BaseURL'
import { toast } from 'react-toastify'

const Header = () => {
  const [modal2, setModal2] = useState(null)
  const toggleModalPrimary = id => {
    if (modal2 !== id) {
      setModal2(id)
    } else {
      setModal2(null)
    }
  }

  //API INTEGRATION
  //GET DATA
  const [topHeader, setTopHeader] = useState([])
  async function fetchTopHeaderData() {
    const response = await Action.get("/topheader", {})
    if (response.data.success === true) {
      setTopHeader(response.data.data)
      // console.log(topHeader)
    } else {
      setTopHeader([])
    }
  }

  useEffect(async () => {
    fetchTopHeaderData()
    console.log(topHeader)
  }, [])

  //UPDATE DATA 
  const [body, setBody] = useState({
    text: "",
    file: [],
    button_text: "",
    link: ""
  })
  async function updateHeader() {
    const response = await Action.put(`/topheader/${topHeader[0]._id}`, body, {})
    console.log(response)
    if (response.data.success === true) {
      console.log(response.data)
    } else {
      console.log(err)
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
                topHeader.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {value.text}
                      </td>

                      <td> <img src={baseURL + value.image} height="40" width="40" /></td>
                      <td>{value.button_text}</td>
                      <td>
                        <UncontrolledDropdown>
                          <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                            <MoreVertical size={15} />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem href='/' onClick={(e) => {
                              e.preventDefault()
                              toggleModalPrimary(value.id)
                            }}>
                              <Edit className='mr-50' size={15} /> <span className='align-middle'>Edit</span>
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
                                    <Input type='text' id='text' onChange={(e) => {
                                      setBody({ ...body, text: e.target.value })
                                      console.log(e.target.value)
                                    }
                                    }
                                      placeholder='Enter your text' />
                                  </InputGroup>
                                </Col>
                                <Col sm='12'>
                                  <FormGroup>
                                    <Label for='icon'>Header Image</Label>
                                    <CustomInput type='file' id='icon' onChange={(e) => {
                                      setBody({ ...body, file: e.target.value })
                                    }
                                    }
                                      name='customFile' />
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
                                    <Input type='text' id='btn' onChange={(e) => {
                                      setBody({ ...body, button_text: e.target.value })
                                    }
                                    }
                                      placeholder='Enter your button text' />
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
                                    <Input type='text' id='url' onChange={(e) => {
                                      setBody({ ...body, link: e.target.value })
                                    }
                                    }
                                      placeholder='Enter your button link' />
                                  </InputGroup>
                                </Col>

                              </Row>
                            </Form>
                          </ModalBody>
                          <ModalFooter>

                            <Button color="primary" onClick={() => updateHeader()}>
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