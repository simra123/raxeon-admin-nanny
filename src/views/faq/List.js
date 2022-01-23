import { useEffect, useState } from 'react'
import '../../@core/scss/react/libs/editor/editor.scss'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { MoreVertical, Edit, Trash } from 'react-feather'
import { Link } from 'react-router-dom'
//import toast types from components 
import { SuccessToast, ErrorToast } from '../components/toastify'
//import toasts from react
import { toast } from 'react-toastify'
import { Card, CardTitle, CardBody, Table, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'
import Action from '../../middleware/API'

const FAQList = () => {
  //GET API 
  const [faq, setFaq] = useState([])

  useEffect((async) => {
    async function fetchFaqData() {
      const response = await Action.get('/faq', {})
      if (response.data.success === true) {
        setFaq(response.data.data)
        console.log(faq)
      } else {
        setFaq([])
      }
    }
    fetchFaqData()
  }, [faq])

  const [modal, setModal] = useState(null)

  const toggleModalDanger = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }
  //delete api
  const deleteFAQ = async (id) => {
    try {
      await Action.delete(`faq?id=${ id }`)
      console.log(id)
      toast.success(<SuccessToast title="Success" text="FAQ Deleted Successfully!" />)
      setModal(null)
    } catch (error) {
      toast.error(<ErrorToast title="error" text="Something went wrong, try again later" />)
      console.log(error)
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
                              toggleModalDanger(value._id)
                            } }>
                              <Trash className='mr-50' size={ 15 } /> <span className='align-middle'>Delete</span>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>

                        {/* delete modal */ }
                        <Modal
                          isOpen={ modal === value._id }
                          toggle={ () => toggleModalDanger(value._id) }
                          className='modal-dialog-centered'
                          modalClassName="modal-danger"
                          key={ value._id }>
                          <ModalHeader toggle={ () => toggleModalDanger(value._id) }>Delete</ModalHeader>
                          <ModalBody>
                            Are you sure you want to delete this?
                          </ModalBody>
                          <ModalFooter>
                            <Button color="danger" onClick={ () => deleteFAQ(value._id) }>
                              delete?
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