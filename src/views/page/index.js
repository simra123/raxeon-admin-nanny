import { useState } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../@core/scss/react/libs/editor/editor.scss'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import {Link} from 'react-router-dom'


import {  Card,  Form, Row, Col, Label, InputGroup, FormGroup, InputGroupAddon, InputGroupText, Input, CardTitle, CardBody, Table,  Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

  const pages = [
    {
      id:1,
      no : 1,
      title : 'About us'
    },
    {
      id:2,
      no : 2,
      title : 'Terms And Conditions'
    },
    {
        id:3,
        no : 3,
        title : 'Privact Policy'
      }

]
  const Pages = () => {

    //text editor
    const [value, setValue] = useState(EditorState.createEmpty())

    //modal
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
        <CardTitle>All Pages </CardTitle>

        <Table responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Page Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
          pages.map((value, index) => {
              return (
              <tr key={index}>
              <td>
                {value.no}
              </td>

              <td> {value.title} </td>
                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <Link to="/edit-page">
                        <DropdownItem href='/' >
                            
                        <Edit className='mr-50' size={15} />  <span className='align-middle'>Edit</span>
                        
                        </DropdownItem>
                      </Link>

                  </DropdownMenu>
                  </UncontrolledDropdown>
                 
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
  export default Pages
