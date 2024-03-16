import 'bootstrap/dist/js/bootstrap.js'; //import bootstrap js file 
import 'bootstrap/dist/css/bootstrap.min.css';//import bootstrap css file
const FAQ = () => {
    return ( 
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div className='faq-title'>
                <h1>Frequently Asked Questions.</h1>
            </div>
            <div class="accordion-item">  {/**ACCORDION1 */}
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                How do I sell tickets for free?
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">When you sign up for Eventbrite, it’s easy 
                    to start planning your first event, post the exciting details, create tickets,
                    and sell tickets online for free in no time! With an industry-leading online 
                    ticket management system, you can sell tickets online for free and accept 
                    different forms of payment with the Eventbrite Organizer.
                    Effortlessly post a new event, set up your ticket types and payment options, 
                    and start promoting to your audience with our step-by-step instructions located on
                    the Eventbrite Help Center page.
                </div>{/****QUESTION ANSWER 1 */}
            </div>
        </div>
        <div class="accordion-item">  {/**ACCORDION2 */}
            <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Can I offer discounts or promo codes on event tickets?
                </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    If you're wondering how to sell tickets online at a higher volume, discount codes
                    are a great way to incentivize a purchase. Utilize Eventbrite’s online ticket management 
                    software to create tickets, offer discounts for attendees, use promo codes to track the 
                    performance of your digital advertising campaign, or list an item with trackable promo codes
                    for specific customer groups — to discover who is spreading the word about your event.
                </div>
            </div>
        </div>
        <div class="accordion-item"> {/**ACCORDION3 */}
            <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    How do I create multiple ticket types on Eventbrite?
                </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    When you use Eventbrite Professional or Premium to sell tickets online, 
                    you can create multiple ticket types, 
                    like Early Bird or VIP, to maximize your online ticket sales by compelling
                    more people to purchase tickets that fit their budget.
                </div>
            </div>
        </div>


            {/**ACCORDION4 */}
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    Can I sell tickets online for a charity event?
                </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                For sure. Eventbrite for Nonprofits can help you grow your audience, event
                 attendance, and achieve your fundraising goals using our advanced online
                ticketing system.
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default FAQ;