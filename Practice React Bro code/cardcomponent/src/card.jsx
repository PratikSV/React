import profile from './assets/profilepic.png';
import './card.css';
function Card() 
{
    return (
        <div className="card">
            <img src={profile} alt="random image" />
            <h2>Pratik Gaikawad</h2>
            <p>I am a BCA student</p>
        </div>
    )
}
export default Card