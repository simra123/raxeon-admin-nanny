import { useEffect, useState } from 'react'
import '../../@core/scss/react/libs/editor/editor.scss'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import { Link } from 'react-router-dom'

import { Card, CardTitle, CardBody, Table, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'
import Action from '../../middleware/API'
import baseURL from '../../middleware/BaseURL'

const FAQList = () => {
  //GET API 
  const [faq, setFaq] = useState([])
  async function fetchFaqData() {
    const response = await Action.get('/faq', {})
    if (response.data.success === true) {
      setFaq(response.data.data)
      console.log(faq)
    } else {
      setFaq([])
    }
  }
  useEffect((async) => {
    fetchFaqData()
  }, [])

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
          <CardTitle>FAQ List </CardTitle>

          <Table responsive>
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Question</th>
                <th>Answer</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                faq.map((value, index) => {
                  return (
                    <tr key={ index }>
                      <td>
                        { value._id }
                      </td>

                      <td>{ value.question }</td>
                      <td>{ value.answer }</td>
                      <td>
                        <UncontrolledDropdown>
                          <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                            <MoreVertical size={ 15 } />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <Link to={ `/faq/edit?_id=${ value._id }` }>
                              <DropdownItem href='/' >
                                <Edit className='mr-50' size={ 15 } />  <span className='align-middle'>Edit</span>
                              </DropdownItem>
                            </Link>

                            <DropdownItem href='/' onClick={ (e) => {
                              e.preventDefault()
                              toggleModalDanger(value.id)
                            } }>
                              <Trash className='mr-50' size={ 15 } /> <span className='align-middle'>Delete</span>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>

                        {/* delete modal */ }
                        <Modal
                          isOpen={ modal === value.id }
                          toggle={ () => toggleModalDanger(value.id) }
                          className='modal-dialog-centered'
                          modalClassName="modal-danger"
                          key={ value.id }>
                          <ModalHeader toggle={ () => toggleModalDanger(value.id) }>Delete</ModalHeader>
                          <ModalBody>
                            Are you sure you want to delete this?
                          </ModalBody>
                          <ModalFooter>
                            <Button color="danger" onClick={ () => toggleModalDanger(value.id) }>
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
export default FAQList