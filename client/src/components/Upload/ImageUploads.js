import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
const { Dragger } = Upload;


const ImageUploads = ({images,setImages}) => {

    const onchange=(info)=>{
        const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
        images.push({url:info?.file?.response?.result?.secure_url,id:info?.file?.response?.result?.public_id})
        // setImages([])
    //    setImages((previmages)=>[...previmages,[{url:info?.file?.response?.result?.secure_url,id:info?.file?.response?.result?.public_id}]])
        console.log(images)
      message.success(`${info?.file?.response?.result?.secure_url} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
    }
    const ondrop=(e)=>{
        console.log('Dropped files', e.dataTransfer.files);
    }


  return (
    <div>
        <ImgCrop rotationSlider>
       <Dragger
       name='file'
       multiple={true}
       action={`${process.env.REACT_APP_API}/api/v1/admin/upload-image`}
       onChange={onchange}
       onDrop={ondrop}
       
       >
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
  </ImgCrop>
    </div>
  )
}

export default ImageUploads
