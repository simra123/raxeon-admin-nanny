import { Fragment } from 'react'
import { toast } from 'react-toastify'
import Avatar from '@components/avatar'
import {Check, X, AlertTriangle, Info } from 'react-feather'

//toast success
export const SuccessToast = (props) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='success' icon={<Check size={12} />} />
        <h6 className='toast-title'>Success!</h6>
      </div>
      {/* <small className='text-muted'>11 Min Ago</small> */}
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        {props.text}
      </span>
    </div>
  </Fragment>
)

//toast error
export const ErrorToast = (props) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='danger' icon={<X size={12} />} />
        <h6 className='toast-title'>Error!</h6>
      </div>
      {/* <small className='text-muted'>11 Min Ago</small> */}
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        {props.text}
      </span>
    </div>
  </Fragment>
)

//toast warning
export const WarningToast = (props) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='warning' icon={<AlertTriangle size={12} />} />
        <h6 className='toast-title'>{props.title}</h6>
      </div>
      {/* <small className='text-muted'>11 Min Ago</small> */}
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        {props.text}
      </span>
    </div>
  </Fragment>
)

//toast info
export const InfoToast = (props) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='info' icon={<Info size={12} />} />
        <h6 className='toast-title'>{props.title}</h6>
      </div>
      {/* <small className='text-muted'>11 Min Ago</small> */}
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        {props.text}
      </span>
    </div>
  </Fragment>
) 