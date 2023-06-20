import React from 'react'
import '../Styles/footer.scss';


const FooterInfoBox = (props) => {
    return (
        <div>
            <h5>{props.title}</h5>
            <ul>
                <li><i class={props.iconLink}></i><span>{props.linkName}</span></li>
                <li><i class={props.iconLink}></i> <span>{props.linkName2}</span></li>
                <li><i class={props.iconLink}></i><span>{props.linkName3}</span></li>
                <li><i class={props.iconLink}></i> <span>{props.linkName4}</span></li>
                <li><i class={props.iconLink}></i> <span>{props.linkName5}</span></li>
            </ul>
        </div>
    )
};


const FooterIcon = () => {
    return (
        <div className='FooterLogos'>
            <h6>Follow us</h6>
            <div className='iconLists'>
                <i class="fa-brands fa-google"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
            </div>

            <div className='copyRight'>
              <p>copyRight &copy; 2023. Designed By Jayesh. All Right Reserved</p>
            </div>
        </div>
    )
};

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerData'>
                <div>
                    <h5>About Me</h5>
                    <div className='aboutData'>
                        <p>
                        In organic farming, farmers rely on techniques such as crop rotation, composting, and biological pest control to maintain soil fertility, control pests and diseases, and promote overall plant health. Synthetic fertilizers and pesticides are replaced with organic alternatives, such as animal manure, cover crops, and beneficial insects.
                        </p>
                    </div>
                </div>
                <FooterInfoBox title="Information" iconLink="fa-solid fa-arrow-right" linkName="Registration" linkName2="Popular Products" linkName3="Organic Info" linkName4="Extra Facilities" linkName5="Events" />
                <FooterInfoBox title="Extra Information" iconLink="fa-solid fa-arrow-right" linkName="Farming Logic" linkName2="Arts & Bussiness" linkName3="Science & Technology" linkName4="Economics & Finance" linkName5="More" />
                <FooterInfoBox title="Have a Question ?" iconLink="fa-sharp fa-solid fa-location-dot" linkName="Exit Somewere in Barat" linkName2="1234-567-897" linkName3="info@gmail.com" linkName4="Linkdin" linkName5="Git Hub" />
            </div>

            <FooterIcon />
        </div>
    )
}

export default Footer;