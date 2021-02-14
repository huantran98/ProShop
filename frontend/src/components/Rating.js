import React from 'react'

const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                {/* Open fontawesome.com to get the stars icon */}
                <i style={{color}} className={
                    value >= 1 
                        ? 'fas fa-star' 
                        : value >= 0.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'
                }></i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 2 
                        ? 'fas fa-star' 
                        : value >= 1.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'
                }></i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 3 
                        ? 'fas fa-star' 
                        : value >= 2.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'
                }></i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 4 
                        ? 'fas fa-star' 
                        : value >= 3.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'
                }></i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 5 
                        ? 'fas fa-star' 
                        : value >= 4.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'
                }></i>
            </span>
            <span>
                {/* If the text exists then show it */}
                {/* Could be written is {text ? text : ''} but use && for short since the '' has nothing inside */}
                {text && text}
            </span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#F4C916',
}

export default Rating
