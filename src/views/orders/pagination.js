import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const PaginationTable = () => {
  return (
   <div className='float-right'>
        <Pagination className='d-flex mt-3'>
        <PaginationItem>
            <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
        <PaginationItem active>
            <PaginationLink href='#'>4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href='#'>5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href='#'>6</PaginationLink>
        </PaginationItem>
        <PaginationItem>
            <PaginationLink href='#'>7</PaginationLink>
        </PaginationItem>
        </Pagination>
    </div>
  )
}
export default PaginationTable
