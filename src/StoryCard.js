import { useState } from "react";
import profileIMG from "./girax.jpg";
function StoryCard({ name, story,category,time }) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      marginTop: "15px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <div style={{display:"flex",alignments:"center"}}>
<image
src={profileIMG}

alt="profile"
style={{
  borderRadius:"50%",marginRight:"10px",width:"100px",height:"100px"
}}
/>
<div>
     <h3 style={{margin:0}}>{name}</h3>
      <small style={{color:"gray"}}>{time}</small>
     </div>
      </div>
    <p style={{background:"#e7f3ff",display:"inline-block",padding:"5px 10px",
    borderRadius:"5px",fontSize:"12px",marginTop:"10px"}}>{category}</p>
      <p>{story}</p>

      <button
        onClick={() => setLikes(likes + 1)}
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer"
        }}
      >
        ❤️ {likes}
      </button>
    </div>
  );
}

export default StoryCard;