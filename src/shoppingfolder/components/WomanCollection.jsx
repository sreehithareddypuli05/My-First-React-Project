import React from 'react'

const WomanCollection = (props) => {
    const {title,image1,image2,image3,image4,image5,image6}=props.ladiesFashion
  return (
    <div className='collectionSection'>
    <h2>{title}</h2>
    <img src="Images/ladiesbanner.jpg" class="responsive-image"></img>

        <div className="menImages">
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
            <img src={image5}/>
            <img src={image6}/>
            
            
        </div>
    </div>
  )
}

export default WomanCollection