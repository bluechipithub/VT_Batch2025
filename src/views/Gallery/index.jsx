// import React from 'react';

// const Gallery = () => {
//   return (
//     <div>
//       <h1>Gallery</h1>
//       <p>Welcome to the gallery page.</p>
//     </div>
//   );
// };

// export default Gallery;
import React, { useState } from "react";

const Gallery = () => {
  const [media, setMedia] = useState([]);

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    const newMedia = files.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type.startsWith("video") ? "video" : "image",
      name: file.name,
    }));

    setMedia((prev) => [...prev, ...newMedia]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gallery</h1>
      <p>Welcome to the gallery page. Upload your photos and videos below.</p>

      {/* Upload Section */}
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleMediaUpload}
        style={{ margin: "10px 0", display: "block" }}
      />

      {/* Preview Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {media.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "5px",
              textAlign: "center",
            }}
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt={item.name}
                style={{ width: "100%", borderRadius: "6px" }}
              />
            ) : (
              <video
                src={item.url}
                controls
                style={{ width: "100%", borderRadius: "6px" }}
              />
            )}
            <p style={{ fontSize: "12px", marginTop: "5px" }}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
