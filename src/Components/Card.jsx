import React from 'react';
import './../App.css'
import './Card.css'

function Card(props) {
    return (
        <div>

            <div className='live_search'>Live Search!</div>
            <div >
                <input onFocus={true} className='inp' onChange={props.chanInput} placeholder='name' />
            </div>
            <ul>
                {
                    props.bol ? props.listData.map((car, index) => <li className="li" key={index}>{car.car_model}</li>) : console.log('bo')
                }
            </ul>
        </div>


    );
}

export default Card;