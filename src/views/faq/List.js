import { useState } from 'react'
import '../../@core/scss/react/libs/editor/editor.scss'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import {Link} from 'react-router-dom'
 
import {  Card, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const faq  = [
    {   id:0,
        no : 1,
        ques : "How long This Site live?",
        ans:  "Lorem ipsum dolor sit amet, "
    },
    {   id:1,
        no : 2,
        ques : "Can I install anything i want on there?",
        ans:  "Lorem ipsum dolor sit amet, "
    },
    {   id:2,
        no : 3,
        ques : "Can i change the domain you me?",
        ans:  "Lorem ipsum dolor sit amet, "
    },
    {   id:3,
        no : 4,
        ques : "How can I migrate to another site?",
        ans:  "Lorem ipsum dolor sit amet, "
    },
    {   id:4,
        no : 5,
        ques : "How many sites i can create at once?",
        ans:  "Lorem ipsum dolor sit amet, "
    }
  
  
]
  const FAQList = () => {
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
              <tr key={index}>
              <td>
                {value.no}
              </td>
      
              <td>{value.ques}</td>
              <td>{value.ans}</td>
                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <Link to="/faq/form">
                      <DropdownItem href='/'  onClick={(e) => { 
                        e.preventDefault()  
                        }}>
                      <Edit className='mr-50' size={15} />  <span className='align-middle'>Edit</span>
                      </DropdownItem>
                      </Link>

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
  export default FAQList