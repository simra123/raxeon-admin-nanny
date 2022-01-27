import { useState, useEffect } from 'react'
import '../../../@core/scss/react/libs/editor/editor.scss'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import { FaTextWidth } from 'react-icons/fa'
import Action from '../../../middleware/API'
import baseURL from '../../../middleware/BaseURL'
//import toast types from components 
import { SuccessToast, ErrorToast } from '../../components/toastify'
//import toasts from react
import { toast } from 'react-toastify'

import { Card, CustomInput, Form, Row, Col, Label, InputGroup, FormGroup, InputGroupAddon, InputGroupText, Input, CardTitle, CardBody, Table, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

const WorkList = () => {
  const [modal, setModal] = useState(null)
  const toggleModalPrimary = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }

  //GET DATA
  const [data, setData] = useState([])
  const [icon, setIcon] = useState({})
  const [iconDetails, setIconDetails] = useState({
    text: '',
    heading: ''
  })
  const onChangeEvent = (e) => {
    const { name, value } = e.target
    setIconDetails(e => {
      return {
        ...e,
        [name]: value
      }
    })
  }

  useEffect(() => {
    const fetchAboutData = async () => {
      const response = await Action.get('/Work', {})
      if (response.data.success === true) {
        setData(response.data.data[0].works)

      } else {
        console.log(response)
      }
    }
    fetchAboutData()
  }, [])

  //put api
  const newData = new FormData()
  newData.append('file', icon)
  newData.append('text', iconDetails.text)

  const updateData = async (id) => {
    const res = await Action.put(`/work/${ id }`, newData, {})

    if (res.data.success) {
      toast.success(<SuccessToast title="Success" text="Service updated Successfully!" />)
      setModal(null)
    } else {
      toast.error(<ErrorToast title="error" text="Something went wrong, try again later" />)
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((value, index) => {
                  return (
                    <tr key={ index }>
                      <td>
                        <img src={ baseURL + value.icon } alt="" height="50" width="50" />
                      </td>

                      <td> { value.heading } </td>
                      <td> { value.text } </td>
                      <td>
                        <UncontrolledDropdown>
                          <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                            <MoreVertical size={ 15 } />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem href='/' onClick={ (e) => {
                              e.preventDefault()
                              toggleModalPrimary(value._id)
                            } }>
                              <Edit className='mr-50' size={ 15 } />  <span className='align-middle'>Edit</span>
                            </DropdownItem>

                          </DropdownMenu>
                        </UncontrolledDropdown>
                        {/* edit modal */ }
                        <Modal
                          isOpen={ modal === value._id }
                          toggle={ () => toggleModalPrimary(value._id) }
                          className='modal-dialog-centered'
                          modalClassName="modal-primary"
                          key={ value._id }>
                          <ModalHeader toggle={ () => toggleModalPrimary(value._id) }>Edit</ModalHeader>
                          <ModalBody>
                            <Form>
                              <Row>
                                <Col sm='12'>
                                  <FormGroup>
                                    <Label for='icon'>Upload Icon</Label>
                                    <CustomInput onChange={ (e) => setIcon(e.target.files[0]) } type='file' id='icon' name='customFile' />
                                  </FormGroup>

                                </Col>

                                <Col sm="12">
                                  {/* how it works form */ }
                                  <Label for='icon-heading'>Icon Heading</Label>
                                  <InputGroup className='input-group-merge' tag={ FormGroup }>
                                    <InputGroupAddon addonType='prepend'>
                                      <InputGroupText>
                                        <FaTextWidth size={ 15 } />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' id='icon-heading' name="heading" value={ iconDetails.heading } onChange={ onChangeEvent } placeholder='Enter your Heading' />
                                  </InputGroup>
                                </Col>


                                <Col sm="12">
                                  {/* how it works form */ }
                                  <Label for='icon-text'>Icon Text</Label>
                                  <InputGroup className='input-group-merge' tag={ FormGroup }>
                                    <InputGroupAddon addonType='prepend'>
                                      <InputGroupText>
                                        <FaTextWidth size={ 15 } />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type='text' onChange={ onChangeEvent } name="text" value={ iconDetails.text } id='icon-text' placeholder='Enter your Text' />
                                  </InputGroup>
                                </Col>
                              </Row>
                            </Form>
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={ () => updateData(value._id) }>
                              Submit

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