import React from 'react'
import './Seasonalharvest.scss'


const SeasonalHarvestCalender = () => {

    const harvestData = [
        { month: 'January', harvests: ['Apples', 'Oranges', 'Kale'] },
        { month: 'February', harvests: ['Carrots', 'Broccoli', 'Spinach'] },
        { month: 'March', harvests: ['Lettuce', 'Radishes', 'Strawberries'] },
        { month: 'April', harvests: ['Peas', 'Cabbage', 'Cauliflower'] },
        { month: 'May', harvests: ['Tomatoes', 'Cucumbers', 'Blueberries'] },
        { month: 'June', harvests: ['Zucchini', 'Beets', 'Raspberries'] },
        { month: 'July', harvests: ['Corn', 'Watermelon', 'Blackberries'] },
        { month: 'August', harvests: ['Grapes', 'Eggplant', 'Peaches'] },
        { month: 'September', harvests: ['Pears', 'Squash', 'Cherries'] },
        { month: 'October', harvests: ['Potatoes', 'Pumpkins', 'Pears'] },
        { month: 'November', harvests: ['Cranberries', 'Brussels Sprouts', 'Chestnuts'] },
        { month: 'December', harvests: ['Ginger', 'Garlic', 'Onions'] }
      ];

      const MonthHarvest = ({item}) => {
        return(
            <div className='season'>
             <h2 className='month_name'>{item.month}</h2>
             <ul className='harvest_container'>
               {
                item.harvests.map((harvest,i) => {
                    return <li key={i+1}>{i+1} {harvest}</li>
                })
               }
             </ul>
            </div>
        )
    }

  return (
    <div className='First_Container'>
    <h2 className='heading'>Seasonal Harvest Calender</h2>
    <div className='grid_container'>
    {
    harvestData.map((item) => <MonthHarvest item={item} />)
    } 
    </div>
    </div>
  )
}

export default SeasonalHarvestCalender