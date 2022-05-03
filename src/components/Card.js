import React from "react";
const Card = ({name, email, id}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img width={'200px'} height={'200px'} src={`https://robohash.org/${id}?100*100`} alt="RoboFriends"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;