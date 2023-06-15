import React from "react"

const GridBox = (Props) => {

    return (
        <React.Fragment>
            <div className="gridContainer">
                <div className="leftSideData">
                    <h4>{Props.firstTitle}</h4>
                    <h1>{Props.mainTitle}</h1>
                    <p>{Props.discription}</p>
                    <button>Join Us</button>
                </div>
                <div className="rightSizeData">
                <img src={Props.imgSrc} alt="images" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default GridBox;