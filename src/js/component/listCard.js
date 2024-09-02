import React from 'react'
import Card from '../component/card'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';


function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="carousel-control-prev" onClick={onClick}>
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Prev</span>
    </div>
  );
}

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="carousel-control-next" onClick={onClick}>
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </div>
  );
}

const responsive =[

	{
	  breakpoint: 1440,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 960,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 480,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	},
	
]

const ListCard = (props) => {
    return(
          <div>
            {(props.data.length>0)?(
              <div className="list-card">
                <h1>{props.type}</h1>
                <Slider
                infinite={true}
                slidesToShow={4}
                slidesToScroll={4}
                responsive={responsive}
                prevArrow={<CustomPrevArrow/>}
                nextArrow={<CustomNextArrow/>}
                >
                  {props.data.map((item,index)=> {return <Card key={item.uid} type={props.type.toLowerCase()} data={item} ></Card> })}
                </Slider>
              </div>):(<div></div>)}
          </div>
    );
}

export default ListCard;
