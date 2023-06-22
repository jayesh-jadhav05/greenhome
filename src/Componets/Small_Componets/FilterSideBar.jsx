import React from 'react';

const FilterSideBar = ({filterMe}) => {
  return (
    <div className='filter'>
       <h2>😃Filters Products😱</h2>
       <h3>Category:</h3>
       <ul>
          <li><label for="fruitcheck">- Fruits</label><button onClick={() => filterMe("fruit")}><input type='checkbox' id='fruitcheck'/></button></li>
          <li><label for="vegitablecheck">- Vegitables</label><button onClick={() => filterMe("vegitable")}><input type='checkbox' id='vegitablecheck'/></button></li>
          <li><label for="legumescheck">- Legumes</label><button onClick={() => filterMe("legume")}><input type='checkbox' id='legumescheck'/></button></li>
          <li><label for="foreigncheck">- Foreign Fruits</label><button onClick={() => filterMe("foreign")}><input type='checkbox' id='foreigncheck'/></button></li>
       </ul>
       
       <h3>Rating:</h3>
       <ul>
          <li><label for="allrating">- All</label><button onClick={() => filterMe("all")}><input type='checkbox' id='allrating'/></button></li>
          <li><label for="onerating">- <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></label><button onClick={() => filterMe(1)}><input type='checkbox' id='onerating'/></button></li>
          <li><label for="tworating">- <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i> <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></label><button onClick={() => filterMe(2)}><input type='checkbox' id='tworating'/></button></li>
          <li><label for="threerating">- <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i> <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i> </label><button onClick={() => filterMe(3)}><input type='checkbox' id='threerating'/></button></li>
          <li><label for="fourrating">- <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></label><button onClick={() => filterMe(4)}><input type='checkbox' id='fourrating'/></button></li>
       </ul>

       <h3>Price Range:</h3>
       <ul>
          <li><label for="allprice">- All</label><button onClick={() => filterMe("all")}><input type='checkbox' id='allprice'/></button></li>
          <li><label for="firstprice">- $0 - $25</label><button onClick={() => filterMe(25)}><input type='checkbox' id='firstprice'/></button></li>
          <li><label for="secondprice">- $25 - $50</label><button onClick={() => filterMe(50)}><input type='checkbox' id='secondprice'/></button></li>
          <li><label for="thirdprice">- $50 - $75</label><button onClick={() => filterMe(75)}><input type='checkbox' id='thirdprice'/></button></li>
          <li><label for="fourprice">- $75 - $100</label><button onClick={() => filterMe(100)}><input type='checkbox' id='fourprice'/></button></li>
       </ul>

       <h3>Others:</h3>
       <ul>
          <li><label for="popular">- Popular</label><button onClick={() => filterMe("popular")}><input type='checkbox' id='popular'/></button></li>
          <li><label for="famous">- Famous</label><button onClick={() => filterMe("famous")}><input type='checkbox' id='famous'/></button></li>
          <li><label for="trending">- Trending</label><button onClick={() => filterMe("trending")}><input type='checkbox' id='trending'/></button></li>
       </ul>
      <button className='clearFilters' onClick={() => filterMe("clear")}>Clear Filters</button>
    </div>
  )
}

export default FilterSideBar;