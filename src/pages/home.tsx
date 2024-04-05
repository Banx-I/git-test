
import profileImg from "./../assets/Viking-portrait-mascot-SVG-cutting-file-design.webp"
import Button from "../components/button"
import { therionText } from "../data/therion";




type ProfileCardProps = {
    src: string;
    photo: number;
    firstName: string;
    lastName: string;
    location?: string;
    follower: number;
    following: number;
    country: string;
    text: string;
    
    
    
  }
  const data: ProfileCardProps = {
    text: therionText,
    src: profileImg,
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
          <Button color="blue">About me</Button>
          <Button color="blue">Music</Button>
          <Button color="blue">Game</Button>
          <Button color="blue">Food</Button>
        </div>
        
        <div className="profile__body">
      
          <div className="profile__main">
          <h2 className="profile__title">Therion</h2>
            {data.text}</div>
          <div className="profile__side"></div>
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