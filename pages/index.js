import React, { useState } from 'react'

const YourComponent = () => {
  const [fileImage, setFileImage] = useState('')

  const handleLocalImageChange = (event) => {
    // Assuming the local image input is of type file
    const file = event.target.files[0]

    if (file) {
      // Perform any additional processing if needed
      setFileImage(URL.createObjectURL(file))
    }
  }

  const handleOnlineImageChange = (event) => {
    const imageUrl = event.target.value
    setFileImage(imageUrl)
  }

  return (
    <div>
      <label>
        Local Image:
        <input type="file" onChange={handleLocalImageChange} />
      </label>

      <br />

      <label>
        Online Image URL:
        <input
          type="text"
          onChange={handleOnlineImageChange}
          placeholder="https://example.com/image.jpg"
        />
      </label>

      {/* Render the image preview only if the fileImage state is not empty */}
      {fileImage && (
        <div>
          <h2>Preview:</h2>
          <img src={fileImage} alt="Preview" />
        </div>
      )}
    </div>
  )
}

export default YourComponent
