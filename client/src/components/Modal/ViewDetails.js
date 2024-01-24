import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ViewDetails = ({isModalOpen,handleOk,handleCancel,selected}) => {
  return (
    <div>
     <Modal title={selected?._id} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{selected.serviceName}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default ViewDetails
