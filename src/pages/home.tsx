
import profileImg from "./../assets/Viking-portrait-mascot-SVG-cutting-file-design.webp"
import Button from "../components/button"
import eldenImg from "../assets/0Jz6uJLxOK7JOMMfcfHFBi1D.webp"
import beanImg from "../assets/1024x768-f2b21802-64bc-11eb-a115-0242ac130010.webp"
import therionImg from "../assets/channels4_profile.jpg"
import aboutImg from "../assets/IMG_20240321_083137.jpg"
import frontImg from "../assets/react-1-logo-png-transparent.png"
import { therionText, gameText, foodText, aboutText, fronText } from "../data/therion";
import  { useState } from "react";
 




type ProfileCardProps = {
    src: string;
    photo: number;
    firstName: string;
    lastName: string;
    location?: string;
    follower: number;
    following: number;
    country: string;
    gameimg: string;
    foodimg: string;
    musicimg: string;
    text: string;
    




    
    
  }
  const data: ProfileCardProps = {
    
    src: profileImg,
    gameimg: eldenImg,
    foodimg: beanImg,
    musicimg: therionImg,
    text: fronText,
    firstName: "Igor",
    lastName: "Banović",
    location: "Čepin",
    follower: 56,
    following: 112,
    country: "Croatia",
    photo: 12,
  
    
  
  }

  type GalleryType = {
    imgUrl: string;
    columns?: number;
}   


type GalleryProps = {
    columns: number;
    gallery: GalleryType[];
  };


  const Home = ({ }: GalleryProps) => {


    const [text, setText] = useState<string | null>(fronText)
    const [sideImage, setSideImage] = useState<string | null>(frontImg);
    const [title, setTitle] = useState("Vježba ");
    const handleGameButtonClick = () => {
      setText(gameText)
      setSideImage(eldenImg);
      setTitle("Elden Ring");
    };
    const handleFoodButtonClick = () => {
      setText(foodText)
      setSideImage(beanImg);
      setTitle("Bean");
    };
    const handleMusicButtonClick = () => {
      setText(therionText)
      setSideImage(therionImg);
      setTitle("Therion");
    };
    const handleAboutButtonClick = () => {
      setText(aboutText)
      setSideImage(aboutImg);
      setTitle("About me");
    };
     
    

    const images = [...Array(12)].map((_, index) => ({
      imgUrl: `https://source.unsplash.com/random/?&${index}`,
    }));
  
    return (
      <>
        <div className="profile">
        <div className="profile__top">
          <img className="profile__img" src={data.src} alt="profileImg" />
          <div className="profile__info">
            <div className="profile__name">{data.firstName} {data.lastName}</div>
            <div className="profile__location">{data.location}</div>
            <div className="profile__country">{data.country}</div>
            
          </div>
          <div className="profile__stats">
          <div className="profile__item">
            <div className="profile__count">{data.photo}</div>
            <div className="profile__label">Photo</div>
          </div>
          <div className="profile__item">
            <div className="profile__count">{data.follower}</div>
            <div className="profile__label">Follower</div>
          </div>
          <div className="profile__item">
            <div className="profile__count">{data.following}</div>
            <div className="profile__label">Following</div>
          </div>
        </div>
        </div>
        <div className="profile__button">
          <Button  onClick={handleAboutButtonClick}color="blue">About me</Button>
          <Button onClick={handleMusicButtonClick} color="blue">Music</Button>
          <Button onClick={handleGameButtonClick} color="blue" >Game</Button>
          <Button onClick={handleFoodButtonClick} color="blue">Food</Button>
        </div>
        
        <div className="profile__body">
      
          <div className="profile__main">
          {title && <h2 className="profile__title">{title}</h2>}
            {text}</div>
          <div className="profile__side">
          {sideImage && <img src={sideImage} alt="Side Image" className="profile__side__img"/>}</div>
        </div>
        <div className="profile__gallery">
          <div className="profil__grid" style={{ display: "grid" , gridGap: "8px", gridTemplateColumns: `repeat(6, 1fr)` }}>
            {images.map((image, index) => (
              <div key={index}>
                <img className="profile__photo" src={image.imgUrl} alt="Random Image" />
              </div>
            ))}
          </div>
        </div>
        </div>
        
      </>
    );
  };
  
  export default Home;