import homeIcon from './../images/home.jpg';
const Home = () => {
    return ( 
        <div id='home'>
            <div className="left-home-grid"></div>
            <div className="right-home-grid">
                <div className='dropdown-bar'>
                    <li><a href='#home'>HOME</a></li>
                    <li><a href='#about'>ABOUT</a></li>
                    <li><a href='#devices'>DOWNLOAD</a></li>
                    <li><a href='#card'>DISCOVER</a></li>
                    <li><a href='#accordionFlushExample'>FAQ</a></li>
                    <li><a href='#resources'>RESOURCES</a></li>
                </div>
                <div className='content'>
                    <div className='title'>
                        <h1>
                            Sell tickets now on<br></br> the leading event<br></br>
                            ticketing platform
                        </h1>
                    </div>  
                    <div className='sub-title'>
                        <p>
                        Eventbrite is an all-in-one ticketing
                        and marketing platform with everything
                        you need to sell event tickets online to your
                        right audience.
                        </p>
                    </div> 
                    <div className='get-started'>
                        <a href='https://www.eventbrite.com/signin/signup/?referrer=/manage/events/create/&_gl=1*1tcmj9j*_up*MQ..&gclid=CjwKCAiArfauBhApEiwAeoB7qEnZQAc8GzO751FpEhG2UgI3rqzgbF9UCCYet8hBxB6aAdB6-f2hfRoC2VYQAvD_BwE&gclsrc=aw.ds'>
                            <button className=''>Get Started for Free</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>//home end
    );
}
 
export default Home;