import Card from  "./components/Card";
import "./app.css";

const Cats = [
    {
        title:"cat",
        imageSrc:"../cat1.jpeg",
        desc:"cute cat"
    },
    {
        title:"cat",
        imageSrc:"./Cat2.jpeg",
        desc:"cute cat"
    },
    {
        title:"cat",
        imageSrc:"./Cat3.jpeg",
        desc:"cute cat"
    },
    {
        title:"cat",
        imageSrc:"./Cat4.jpeg",
        desc:"cute cat"
    },
    {
        title:"cat",
        imageSrc:"./Cat5.jpeg",
        desc:"cute cat"
    },
    {
        title:"cat",
        imageSrc:"./Cat6.jpeg",
        desc:"cute cat"
    },
    {
        title:"cat",
        imageSrc:"./Cat7.jpeg",
        desc:"cute cat"
    },
    {
        title:"cat",
        imageSrc:"./Cat8.jpeg",
        desc:"cute cat"
    }
]

function App(){
    return <div className="cardContainer">
        {Cats.map((cat) => {
            return (
            <Card title={cat.title} desc={cat.desc} image={cat.imageSrc}/>
        );
        })}
    </div>
}

export default App