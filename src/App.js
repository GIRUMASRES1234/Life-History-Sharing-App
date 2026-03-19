import { useState } from "react";
import StoryCard from "./StoryCard";
//onClick() 
function App() {
  const [Likes, setLikes] = useState(0);

  return (
    <div>
      <h1>Count: {Likes}</h1>

      <button onClick={() => setLikes(Likes + 1)}>
        Like 👍
      </button>
      <button onClick={()=>setLikes(0)}>Reset Likes</button>
      <button onClick={() => setLikes(Likes - 1)}>
        Dislike 👎
      </button>
    </div>
  );
}

//OnChaneg() 
function Name(){
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Hello {name}</h1>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}


function Story(){
const [name, setName]=useState("");
const [story,setStory]=useState("");

return(

  <div>
    
    <p>write your name:</p>
    <input type="text" 
    placeholder="write your name"
    onChange={(e)=>setName(e.target.value)}
    />
    <p>write your story:</p>
    <input type="text" 
    placeholder="write your story"
    onChange={(e)=>setStory(e.target.value)}
    />
    <p>Name: {name}</p>
    <p>Story: {story}</p>
  </div>
);
}

function Type(){
  const [note, setNote]=useState("");
 
return(
  <div>
    setName("");
    setStory("");
    <p>You are typing: {note}</p>
    <input type="text"
    placeholder="type text"
    onChange={(e)=>setNote(e.target.value)

      
    }/>
    <button 
      
      >
  Submit 🚀
</button>
<button onClick={()=>setNote("")}>Reset</button>
  </div>
);
}

//Story Card Display
function Card() {
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [stories, setStories] = useState([]);

  const handleSubmit = () => {
    const newStory = { name, story };

    setStories([...stories, newStory]);

    setName("");
    setStory("");
  };

  return (
    <div >
      <h1>Life Story App ✍️</h1>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <textarea
        placeholder="Write your story..."
        value={story}
        onChange={(e) => setStory(e.target.value)}
      />

      <br /><br />

      <button onClick={handleSubmit}>
        Submit Story 🚀
      </button>

      <hr />
      <h2>Stories</h2>

      {stories.map((s, index) => (
        <StoryCard key={index} name={s.name} story={s.story} />
      ))}
    </div>
  );
}

//story card display==============================================================================




function Scard() {
  const [name, setName] = useState("");
  const [story, setStory] = useState("");
  const [stories, setStories] = useState([]);
  const [category,setCategory]=useState();
  const [filter,setFilter]=useState("all");
  const handleSubmit = () => {
    if(!name||!story||!category) return;
    const newStory = { name, story,category:category.toLowerCase(),time: new Date().toString(),id: Date.now() };

    setStories([...stories, newStory]);

    setName("");
    setStory("");
    setCategory("");

  };

  return (
    <div style={{
  background: "#f0f2f5",
  minHeight: "100vh",
  padding: "20px"
}}>
      <h1 style={{ textAlign: "center" }}>Life Story App ✍️</h1>
<input 
type="text"
placeholder="Category(family,relationship)"
value={category}
onChange={(e)=>setCategory(e.target.value)}
style={{width:"100%",padding:"10px",marginTop:"10px",borderRadius:"5px",border:"1px solid #ccc"}}
/>
      <input
  type="text"
  placeholder="Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }}
/>

      <br /><br />

      <textarea
  placeholder="Share your story..."
  value={story}
  onChange={(e) => setStory(e.target.value)}
  style={{
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  }}
/>

      <br /><br />

      <button
  onClick={handleSubmit}
  style={{
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
>
  Post Story 🚀
</button>

<button onClick={()=>setFilter("all")}>All</button>
<button onClick={()=>setFilter("family")}
  style={{
    background:filter==="family"? "#007bff" : "#ccc",color:"white",margin:"5px"
  }}
  >Family</button>

<button onClick={()=>setFilter("relationship")}
  style={{
    background:filter==="relationship"? "#007bff" : "#ccc",color:"white",margin:"5px"
  }}
  >Relationship</button>
      <hr />

      <h2>Stories</h2>

     
      {stories
  .filter((s)=>{if(filter==="all") return true;
    return s.category.toLowerCase()===filter;
  })
  .map((s)=>(<StoryCard key={s.id}  name={s.name} story={s.story} category={s.category} time={s.time}/>))
}
    </div>
  );
}

export default Scard;
