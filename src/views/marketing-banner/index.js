import { useState, useEffect } from 'react'
import Uppy from '@uppy/core'
import thumbnailGenerator from '@uppy/thumbnail-generator'
import { DragDrop } from '@uppy/react'
import '../../@core/scss/react/libs/file-uploader/file-uploader.scss'
import 'uppy/dist/uppy.css'
import { MoreVertical, Edit } from 'react-feather'
import Select from 'react-select'
//import toast types from components 
import { SuccessToast, ErrorToast } from '../components/toastify'
//import toasts from react
import { toast } from 'react-toastify'
import Action from '../../middleware/API'
import baseURL from '../../middleware/BaseURL'


import { Card, Spinner, Form, Row, CustomInput, Col, CardTitle, CardBody, Table, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle, Button } from 'reactstrap'

const banner = [
  {
    id: 1,
    no: 1,
    image: 'https://images.pexels.com/photos/6974315/pexels-photo-6974315.jpeg?cs=srgb&dl=pexels-cottonbro-6974315.jpg&fm=jpg'
  }

]
const langs = [
  {
    value: 'French',
    label: 'French'
  },
  {
    value: 'English',
    label: 'English'
  }


]
const Banner = () => {
  const [modal, setModal] = useState(null)
  //file uploader
  const [img, setImg] = useState(null)
  const [lang, setLang] = useState('French')
  const [preview, setPreview] = useState([])
  const [id, setId] = useState('')


  const toggleModalPrimary = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }

  useEffect(() => {
    const getBanner = async () => {
      const { data } = await Action.get(`/banner/splash?lang=${ lang }`)
      setImg(data.data[0].image)
      setId(data._id)
    }
    getBanner()
  })


  const uppy = new Uppy({
    meta: { type: 'avatar' },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  uppy.use(thumbnailGenerator)

  uppy.on('thumbnail:generated', (file, preview) => {
    setImg(file.data)
    setPreview(preview)
  })
  //post
  const postBanner = async (e) => {
    const res = await Action.put(`/banner/${ id }`)
    console.log(res)
  }
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle>Marketing Banner

          </CardTitle>
          <Select
            className='react-select my-2 w-25'
            defaultValue={ lang }
            options={ langs }
            style={ { width: "150px" } }
            onChange={ (e) => setLang(e.value) }
          />
          <Table responsive>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Banners</th>
                <th>Show</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                banner.map((value, index) => {
                  return (
                    <tr key={ index }>
                      <td>
                        { value.no }
                      </td>

                      <td> <img src={ baseURL + img } width="auto" height="230" alt="" /> </td>
                      <td>
                        <CustomInput
                          className='custom-control-secondary'
                          type='switch'
                          id={ value.id }
                          name='secondary'
                          inline
                          defaultChecked
                        />
                      </td>
                      <td>
                        <UncontrolledDropdown>
                          <DropdownToggle className='icon-btn hide-arrow' color='transparent' size='sm' caret>
                            <MoreVertical size={ 15 } />
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem href='/' onClick={ (e) => {
                              e.preventDefault()
                              toggleModalPrimary(value.id)
                            } }>
                              <Edit className='mr-50' size={ 15 } />  <span className='align-middle'>Edit</span>
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                        <Modal
                          isOpen={ modal === value.id }
                          toggle={ () => toggleModalPrimary(value.id) }
                          className='modal-dialog-centered'
                          modalClassName="modal-primary"
                          key={ value.id }>
                          <ModalHeader toggle={ () => toggleModalPrimary(value.id) }>Edit</ModalHeader>
                          <ModalBody>
                            <Form>
                              <Row>
                                <Col sm='12' className="mt-2">
                                  {/* basic image upload */ }

                                  <h6> Upload Banner </h6>
                                  <DragDrop uppy={ uppy } />
                                  { img !== null ? <img className='rounded mt-2' src={ preview ? preview : baseURL + img } alt='avatar' /> : null }
                                </Col>

                              </Row>
                            </Form>
                          </ModalBody>
                          <ModalFooter>

                            <Button color="primary" onClick={ (e) => postBanner(e) }>
                              Submit
                              {/* spinner */ }
                              {/* <Spinner color='light' /> */ }
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
export default Banner
