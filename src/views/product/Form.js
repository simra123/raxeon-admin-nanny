import { useState, useEffect } from "react"
import Uppy from "@uppy/core"
import { useHistory } from 'react-router-dom'
import thumbnailGenerator from "@uppy/thumbnail-generator"
import { DragDrop } from "@uppy/react"
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import "../../@core/scss/react/libs/editor/editor.scss"
import "../../@core/scss/react/libs/file-uploader/file-uploader.scss"
import "uppy/dist/uppy.css"
import MultipleUploader from "@src/views/forms/form-elements/file-uploader/FileUploaderMulti"
import { selectThemeColors } from "@utils"
import Select from "react-select"
import { MdOutlineProductionQuantityLimits } from "react-icons/md"
import { AiOutlineNumber } from "react-icons/ai"
import { SuccessToast, ErrorToast } from '../components/toastify'
import { stateToHTML } from 'draft-js-export-html'
import { toast } from 'react-toastify'
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  Input,
  Form,
  Button,
  Label,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Spinner
} from "reactstrap"
import { Smartphone } from "react-feather"
import { FaAddressBook, FaDollarSign } from "react-icons/fa"
import Action from "../../middleware/API"

//   hardcoded colors

//   hardcoded categories

//   hardcoded att names
// const attNames = [
//     { value: 'size', label: 'size' },
//     { value: 'size', label: 'size' }
// ]
//   hardcoded att values
// const attValue = [
//     { value: 'small', label: 'small' },
//     { value: 'large', label: 'large' }
// ]
// const categories = [
//   { value: 't-shirts', label: 'T Shirts' },
//   { value: 'caps', label: 'Caps' },
//   { value: 'sweat-shirts', label: 'Sweat Shirts' }
// ]

const ProductForm = () => {
  //  file Uploader
  const [img, setImg] = useState(null)
  //text editor
  const [value, setValue] = useState(EditorState.createEmpty())
  const history = useHistory()

  const uppy = new Uppy({
    meta: { type: "avatar" },
    restrictions: { maxNumberOfFiles: 1 },
    autoProceed: true
  })

  uppy.use(thumbnailGenerator)

  uppy.on("thumbnail:generated", (file, preview) => {
    setImg(preview)
  })

  // multiple file uploader
  const [previewArr, setPreviewArr] = useState([])

  const uppyMultiple = new Uppy({
    meta: { type: "avatar" },
    autoProceed: true
  })

  uppyMultiple.use(thumbnailGenerator)
  // uppy.use(XHRUpload, {
  //   endpoint:'http://localhost:4000/product',
  //   fieldName:'file',
  //   formDate: true

  // })
  uppyMultiple.on("thumbnail:generated", (file, preview) => {
    const arr = previewArr
    arr.push(preview)
    setPreviewArr([...arr])
  })

  const renderPreview = () => {
    if (previewArr.length) {
      return previewArr.map((src, index) => (
        <img key={ index } className="rounded mt-2 mr-1" src={ src } alt="avatar" />
      ))
    } else {
      return null
    }
  }

  const [category, setcategory] = useState([])
  const [colors, setcolors] = useState([])
  const [attribute, setattribute] = useState([])
  const [values, setvalues] = useState([])
  const [para, setPara] = useState(EditorState.createEmpty())

  const [body, setbody] = useState({
    name: "",
    minQuantity: 0,
    category: "",
    colors: [],
    price: 0,
    quantity: 0,
    SKU: "",
    attribute: "",
    value: ""
  })

  async function fetchcategorydata() {
    const response = await Action.get("/category", {})

    if (response.data.success === true) {
      response.data.data.map((item, index) => {
        response.data.data[index].value = item.text
        response.data.data[index].label = item.text
      })
      setcategory(response.data.data)
    } else {
      setcategory([])
    }
  }

  const fetchcolor = async () => {
    const response = await Action.get("/color", {})

    if (response.data.success === true) {
      response.data.data.map((item, index) => {
        response.data.data[index].value = item.color
        response.data.data[index].label = item.color
      })

      setcolors(response.data.data)
    } else {
      setcolors([])
    }
  }
  const fetchattribute = async () => {
    const response = await Action.get("/attribute", {})

    if (response.data.success === true) {
      response.data.data.map((item, index) => {
        response.data.data[index].value = item.attribute
        response.data.data[index].label = item.attribute
      })
      setattribute(response.data.data)
    } else {
      setattribute([])
    }
  }
  const fetchvalues = async (id) => {
    const response = await Action.get(`/attribute/value?id=${ id }`, {})

    if (response.data.success === true) {
      response.data.data.map((item, index) => {
        response.data.data[index].value = item.value
        response.data.data[index].label = item.value
      })
      setvalues(response.data.data)
    } else {
      setvalues([])
    }
  }
  useEffect(async () => {
    fetchcategorydata()
    fetchcolor()
    fetchattribute()
  }, [])

  const paraToHtml = stateToHTML(para.getCurrentContent())
  console.log(paraToHtml)
  const data = new FormData()
  data.append('name', body.name)
  data.append('minQuantity', body.minQuantity)
  data.append('file', img)
  data.append('category', body.category)
  data.append('color', body.color)
  data.append('price', body.price)
  data.append('quantity', body.quantity)
  data.append('SKU', body.SKU)
  data.append('comments', paraToHtml)

  const submit = async () => {
    await console.log(await data)
    console.log(body)
    const response = await Action.post(`/product`, data, {})
    if (response.data.success === true) {
      toast.success(
        <SuccessToast title="Success" text="Category added Successfully!" />
      )

      history.push("/product/form")
    } else {
      toast.error(
        <ErrorToast
          title="error"
          text="Something went wrong, try again later"
        />
      )
    }
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Add New Product</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row>
            <Col sm="12" md="6">
              {/*product form */ }
              <Label for="pro-name">Product Name</Label>
              <InputGroup className="input-group-merge" tag={ FormGroup }>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <MdOutlineProductionQuantityLimits size={ 15 } />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="text"
                  id="pro-name"
                  placeholder="Enter your product Name"
                  onChange={ (e) => {
                    setbody({ ...body, name: e.target.value })
                  } }
                />
              </InputGroup>
            </Col>
            <Col sm="12" md="6">
              {/*product form */ }
              <Label for="quantity">Minimum Purchase Quatity</Label>
              <InputGroup className="input-group-merge" tag={ FormGroup }>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <AiOutlineNumber size={ 15 } />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="number"
                  id="quantity"
                  placeholder="Enter your quantity"
                  onChange={ (e) => {
                    setbody({ ...body, minQuantity: e.target.value })
                  } }
                />
              </InputGroup>
            </Col>

            <Col className="mb-1" md="6" sm="12">
              <Label>Categories</Label>
              <Select
                theme={ selectThemeColors }
                className="react-select"
                classNamePrefix="select"
                defaultValue={ category }
                onChange={ (e) => {
                  setbody({ ...body, category: e._id })
                } }
                options={ category }
                isClearable={ false }
              />
            </Col>
          </Row>

          <h4 className="py-2">Product Images</h4>

          <Row className="mb-2">
            <Col sm="12">
              {/* basic image upload */ }

              <h6>Thumbnail Image (300x300)</h6>
              <small>
                This image is visible in all product box. Use 300x300 sizes
                image. Keep some blank space around main object of your image as
                we had to crop some edge in different devices to make it
                responsive.
              </small>
              <div className="mt-2">
                <DragDrop uppy={ uppy } />
                { img !== null ? (
                  <img
                    className="rounded mt-2"
                    src={ img }
                    alt="avatar"
                    height="100"
                    width="100"
                  />
                ) : null }
              </div>
            </Col>
            <Col sm="12" className="mt-4">
              {/* basic image upload */ }

              <h6>Gallery Images (600x600)</h6>
              <small className="pb-2">
                These images are visible in product details page gallery. Use
                600x600 sizes images.
              </small>
              <div className="mt-1">
                <MultipleUploader />
              </div>
            </Col>
          </Row>
          <h4 className="py-2">Product letiants</h4>
          <Row>
            <Col className="mb-1" md="12" sm="12">
              <Label>Colors</Label>
              <Select
                theme={ selectThemeColors }
                className="react-select"
                classNamePrefix="select"
                defaultValue={ colors[0] }
                options={ colors }
                onChange={ (e) => {
                  setbody({ ...body, color: e._id })
                } }
                isClearable={ false }
              />
            </Col>
          </Row>
          <h4 className="py-2">Attributes</h4>
          <Row>
            <Col className="mb-1" md="6" sm="12">
              <Label>Attribute Name</Label>
              <Select
                theme={ selectThemeColors }
                className="react-select"
                classNamePrefix="select"
                defaultValue={ attribute[0] }
                options={ attribute }
                onChange={ (e) => {
                  setbody({ ...body, attribute: e.attribute })
                  fetchvalues(e._id)
                } }
                isClearable={ false }
              />
            </Col>
            <Col className="mb-1" md="6" sm="12">
              <Label>Attribute Value</Label>
              <Select
                theme={ selectThemeColors }
                className="react-select"
                classNamePrefix="select"
                defaultValue={ values[0] }
                options={ values }
                onChange={ (e) => {
                  setbody({ ...body, value: e.value })
                } }
                isClearable={ false }
              />
            </Col>
            <Col sm="12" md="6">
              {/*att form */ }
              <Label for="Unitprice">Unit price</Label>
              <InputGroup className="input-group-merge" tag={ FormGroup }>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaDollarSign size={ 15 } />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="number"
                  id="UnitPrice"
                  placeholder="Unit Price"
                  onChange={ (e) => {
                    setbody({ ...body, price: e.target.value })
                  } }
                />
              </InputGroup>
            </Col>
            <Col sm="12" md="6">
              {/*att form */ }
              <Label for="quantity">Quatity</Label>
              <InputGroup className="input-group-merge" tag={ FormGroup }>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <AiOutlineNumber size={ 15 } />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="number"
                  id="quantity"
                  placeholder="Enter your quantity"
                  onChange={ (e) => {
                    setbody({ ...body, quantity: e.target.value })
                  } }
                />
              </InputGroup>
            </Col>
            <Col sm="12" md="6">
              {/*product form */ }
              <Label for="sku">SKU</Label>
              <InputGroup className="input-group-merge" tag={ FormGroup }>
                <Input
                  type="text"
                  id="sku"
                  placeholder="Enter your SKU"
                  onChange={ (e) => {
                    setbody({ ...body, SKU: e.target.value })
                  } }
                />
              </InputGroup>
            </Col>
            <Col sm="12" className="mt-2">
              {/* text editor */ }
              <h6>Product Description</h6>
              <Editor editorState={ para } onEditorStateChange={ data => setPara(data) } />


            </Col>

            <Col sm="12" className="mt-4">
              <FormGroup className="d-flex mb-0">
                <Button.Ripple
                  className="mr-1"
                  color="primary"
                  type="submit"
                  onClick={ (e) => {
                    e.preventDefault()
                    submit()
                  } }
                >
                  Submit
                  {/* spinner */ }
                  {/* <Spinner color='light' /> */ }
                </Button.Ripple>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default ProductForm
