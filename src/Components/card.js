import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//import fontawesome
import { faArrowDown } from '@fortawesome/fontawesome-free-solid' //import icon from fontawesome
const Card = () => {
    return ( 
        <div id="card">
            <div className="card-box">
                {/***CARD1 */}
                <div className='card-grid'>
                    <div className="card-title">
                        <h1>
                        Create your event with the best online ticketing system
                        </h1>
                    </div>
                    <div className="card-sub-title">
                    Easily create, manage, and deliver a memorable in-person
                     or virtual event experience on a trusted platform.
                    </div>
                    <div className="card-link">
                        <p><a href='https://www.eventbrite.com/l/sell-tickets-with-us-sticky-lpm/?&utm_source=google&utm_medium=cpc&utm_campaign=US_BAU_GA01_01_BR_1PP_Clicks_Core&utm_term=eventbrite&gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qEnZQAc8GzO751FpEhG2UgI3rqzgbF9UCCYet8hBxB6aAdB6-f2hfRoC2VYQAvD_BwE&gclsrc=aw.ds#tools-sell-tickets-online'>Learn more<span><FontAwesomeIcon icon={faArrowDown}/></span></a></p>
                    </div>
                </div>

                {/***CARD2 */}
                <div className='card-grid'>
                    <div className="card-title">
                        <h1>
                        An event ticketing platform built for growth
                        </h1>
                    </div>
                    <div className="card-sub-title">
                        <p>
                        Tap into the world’s largest events marketplace and expand your reach with social marketing tools powered by our exclusive data.
                        </p>
                    </div>
                    <div className="card-link card-link2">
                        <p><a href='https://www.eventbrite.com/l/sell-tickets-with-us-sticky-lpm/?&utm_source=google&utm_medium=cpc&utm_campaign=US_BAU_GA01_01_BR_1PP_Clicks_Core&utm_term=eventbrite&gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qEnZQAc8GzO751FpEhG2UgI3rqzgbF9UCCYet8hBxB6aAdB6-f2hfRoC2VYQAvD_BwE&gclsrc=aw.ds#promote-events-ticketing'>Learn more<span><FontAwesomeIcon icon={faArrowDown}/></span></a></p>
                    </div>
                </div>

                {/***CARD3 */}
                <div className='card-grid'>
                    <div className="card-title">
                        <h1>
                        Build your community
                        </h1>
                    </div>
                    <div className="card-sub-title">
                    <p>Stay connected to your attendees and drive online ticket sales with advanced email marketing tools, targeted notifications, and real-time insights that get results.</p>
                    </div>
                    <div className="card-link">
                        <p><a href='https://www.eventbrite.com/l/sell-tickets-with-us-sticky-lpm/?&utm_source=google&utm_medium=cpc&utm_campaign=US_BAU_GA01_01_BR_1PP_Clicks_Core&utm_term=eventbrite&gad_source=1&gclid=CjwKCAiArfauBhApEiwAeoB7qEnZQAc8GzO751FpEhG2UgI3rqzgbF9UCCYet8hBxB6aAdB6-f2hfRoC2VYQAvD_BwE&gclsrc=aw.ds#audience-email-marketing'>Learn more<span><FontAwesomeIcon icon={faArrowDown}/></span></a></p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Card;