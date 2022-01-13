import { useState, useEffect } from 'react'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg'
import '../../../@core/scss/react/libs/editor/editor.scss'
import { MoreVertical, Edit, Trash, User } from 'react-feather'
import {Link} from 'react-router-dom'


import {  Card, CardTitle, Table, CardBody, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap'
import Action from '../../../middleware/API'
import baseURL from '../../../middleware/BaseURL'
//   const about = [
//     {
//       id:1,
//       text : 'we this is perhaps the single biggest obstacle that all of us must overcome successful....'
//     }

// ]

const AboutList = () => {
    //GET DATA
    const [about, setAbout] = useState([])
    const [data, setData] = useState([])
    async function fetchAboutData () {
      const response = await Action.get('/about', {})
      if (response.data.success === true)  {
        setAbout(response.data.data)
        // console.log(response.data.data)
      } else {
        setAbout([])
      }
    }

    useEffect(async () => {
      fetchAboutData()
      about.map((value) => {
        setData(value.sections)
        console.log(data)
      })
    }, [])
  

    return (
        <>
        <Card>
        <CardBody>
        <CardTitle>About us list </CardTitle>

        <Table responsive>
          <thead>
            <tr>
              <th>Text</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
          data.map((value, index) => {
              return (
              <tr key={index}>
              <td>
                {value.text}
              </td>
                <td>
                  <UncontrolledDropdown>
                  <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                      <MoreVertical size={15} />
                  </DropdownToggle>
                  <DropdownMenu right>
                      <Link to="/frontend/about/form">
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
  export default AboutList
