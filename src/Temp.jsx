import React, { useState } from 'react';

export default function aa() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
   const profile=e.target.files[0]

   const filetypesallows=["image/png","image/jpeg"]

//    in bites
   const size =2*1024*1024 


   if(filetypesallows?.includes(profile?.type) )
   {
    if(profile?.size<=size) setFile(profile)

        else setError("size is bigger")
   }
  else setError("file type not vailide")

  }; 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file) {
      setError("Please select a valid file.");
      return;
    }

    const formData = new FormData();
    formData.append("profile", file);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => console.log("Uploaded:", data))
      .catch(err => console.error("Upload error:", err));
  };



  console.log(error);

  
  return (
    <form onSubmit={handleSubmit} className=' py-10'>
      <input type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Upload</button>
    </form>
  );
}
