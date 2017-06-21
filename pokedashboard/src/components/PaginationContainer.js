import React from 'react';
import { Pagination, Col } from 'react-bootstrap/lib/';

const PaginationContainer = ({totalPages, btnSize, activePage, onSelect}) => {
  return (
    <Col sm={12}>
      {totalPages > 1 ?
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          bsSize={btnSize}
          items={totalPages}
          maxButtons={5}
          activePage={activePage}
          onSelect={onSelect} />
        : null }
    </Col>
  )
}

export default PaginationContainer;
