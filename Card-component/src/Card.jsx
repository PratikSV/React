import profilepic from './assets/profile.png';

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilepic} alt="Profile Picture"></img>
            <h2 className='card-title'>Pratik</h2>
            <p className='card-text'>I learing ReactJS and Play games.</p>
        </div>
    );
}

export default Card