import { useState, useEffect } from 'react'
import '../../../@core/scss/react/libs/editor/editor.scss'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import { FaTextWidth } from 'react-icons/fa'
import Action from '../../../middleware/API'
import baseURL from '../../../middleware/BaseURL'

import { Card, CustomInput, Spinner, Form, Row, Col, Label, InputGroup, FormGroup, InputGroupAddon, InputGroupText, Input, CardTitle, CardBody, Table, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

const WorkList = () => {

  //GET DATA
  const [data, setData] = useState([])
  const [section, setSection] = useState([])

  async function fetchAboutData() {
    const response = await Action.get('/Work', {})
    if (response.data.success === true) {
      setSection(response.data.data)
      console.log(section)
    } else {
      setSection([])
    }
  }

  useEffect(async () => {
    fetchAboutData()
    section.map((value) => {
      setData(value.works)
      console.log(data)
    })
  }, [])

  const [modal, setModal] = useState(null)
  const toggleModalPrimary = id => {
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
          <CardTitle>All List</CardTitle>

          <Table responsive>
            <thead>
              <tr>
                <th>Icon</th>
                <th>Heading</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody>
              {
                section.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={value.icon} alt="" height="50" width="50" />
                      </td>
                      <td> {value.text} </td>
                      {data.map((value, index) => {
                        return (
                          <td> {value.text} </td>
                        )
                      })}
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
                        {/* edit modal */}
                        <Modal
                          isOpen={modal === value.id}
                          toggle={() => toggleModalPrimary(value.id)}
                          className='modal-dialog-centered'
                          modalClassName="modal-primary"
                          key={value.id}>
                          <ModalHeader toggle={() => toggleModalPrimary(value.id)}>Edit</ModalHeader>
                          <ModalBody>
                            <Form>
                              <Row>
                                <Col sm='12'>
                                  <FormGroup>
                                    <Label for='icon'>Upload Icon</Label>
                                    <CustomInput type='file' id='icon' name='customFile' />
                                  </FormGroup>

                                </Col>

                                <Col sm="12">
                                  {/* how it works form */}
                                  <Label for='icon-heading'>Icon Heading</Label>
                                  <InputGroup className='input-group-merge' tag={FormGroup}>
                                    <InputGroupAddon addonType='prepend'>
                                      <InputGroupText>
                                        <FaTextWidth size={15} />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' id='icon-heading' placeholder='Enter your Heading'
                                    />
                                  </InputGroup>
                                </Col>

                                <Col sm="12">
                                  {/* how it works form */}
                                  <Label for='icon-text'>Icon Text</Label>
                                  <InputGroup className='input-group-merge' tag={FormGroup}>
                                    <InputGroupAddon addonType='prepend'>
                                      <InputGroupText>
                                        <FaTextWidth size={15} />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' id='icon-text' placeholder='Enter your Text' />
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
export default WorkList