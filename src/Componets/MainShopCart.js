import React,{useState} from 'react'

const MainShopCart = ({ item,addData }) => {

  const [styles,setStyles] = useState([{display : "none"},{display : "block"}]);
  const [find,setFind] = useState(true);

  const ChangeLike = () => {
    if(find === true){
      setStyles([{display : "block",color:"red"},{display : "none"}]);
      // alert("You Like The Product ❤️");
      setFind(false);
    }else{
      setStyles([{display : "none"},{display : "block"}]);
      setFind(true);
    }
  };

  return (  
    <div className='shopcard'>
      <span style={styles[0]}><i class="fa-solid fa-heart" onClick={() => ChangeLike()}></i></span>
      <span style={styles[1]}><i class="fa-regular fa-heart" onClick={() => ChangeLike()}></i></span>
      <img src={item.img} alt='Product1' />
      <div className='productname'>
        <div className='extradetails'>
          <h6>{item.name}</h6>
          <p className='price'>&#8377;  {item.price}  </p>
        </div>
        <button onClick={() => { addData(item)}}>Add</button>
      </div>
    </div>
  );
};

export default MainShopCart;