
import { myFunction } from "./script.js";
myFunction();
console.log('dfsd');




const drivers = [
    { id: '23bq1a0501', name: 'John Doe', busNo: 1, status: true, routeName: ' YSR circle' },
    { id: '23bq1a0502', name: 'Alice Smith', busNo: 2, status: false, routeName: 'NTR circle' },
    { id: '23bq1a0503', name: 'Michael Johnson', busNo: 3, status: true, routeName: 'Eastside Circuit' },
    { id: '23bq1a0504', name: 'Emily Davis', busNo: 4, status: true, routeName: 'Westside Route' },
    { id: '23bq1a0505', name: 'Chris Lee', busNo: 5, status: false, routeName: 'Airport Shuttle' },
    { id: '23bq1a0506', name: 'Sophia Miller', busNo: 6, status: true, routeName: 'Suburban Connector' },
    { id: '23bq1a0507', name: 'James Wilson', busNo: 7, status: false, routeName: 'Night Rider' },
    { id: '23bq1a0508', name: 'Olivia Brown', busNo: 8, status: true, routeName: 'City Circle' },
    { id: '23bq1a0509', name: 'David Martinez', busNo: 9, status: true, routeName: 'Harbor Line' },
    { id: '23bq1a0510', name: 'Isabella Garcia', busNo: 10, status: false, routeName: 'Mountain Trail' },
    { id: '23bq1a0511', name: 'William Anderson', busNo: 11, status: true, routeName: 'Lakeside Route' },
    { id: '23bq1a0512', name: 'Mia Thomas', busNo: 12, status: true, routeName: 'Campus Shuttle' },
    { id: '23bq1a0513', name: 'Benjamin Taylor', busNo: 13, status: false, routeName: 'Historic District' },
    { id: '23bq1a0514', name: 'Charlotte Moore', busNo: 14, status: true, routeName: 'Business Loop' },
    { id: '23bq1a0515', name: 'Lucas Martin', busNo: 15, status: true, routeName: 'Park & Ride' },
    { id: '23bq1a0516', name: 'Amelia Jackson', busNo: 16, status: false, routeName: 'Cross Town' }
  ];

let driversHTML='';

  drivers.forEach((driver)=>{
     driversHTML+= `
            <tbody>
              <tr>
                <td>${driver.id}</td>
                <td>${driver.name}</td>
                <td>${driver.busNo}</td>
                <td>${driver.routeName}</td>
                <td>${driver.status}</td>
              </tr>
            </tbody>
          </table>
          
        </div>`
        
    })

document.querySelector('.js-table-body').innerHTML=driversHTML;
let footerHTML =`
 <h4>You can reach out and stay updated by connecting with us through the following platforms.</h4>
                   <h4>Click on icon's to visit our official pages.</h4>

        <footer class="footer"  style="background-color:#ffff; color:black; padding:25px 15px; max-width: 100%; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size:14px; text-align:center; line-height:1.6; max-width:1000px; margin: 0 auto;">
         <a href="https://www.instagram.com/"> 
            <p "><script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
                 <dotlottie-player src="https://lottie.host/198706bd-6004-4c9e-a8ca-87264dca29dd/xdVwS5xhhC.lottie" background="transparent" speed="1" style="width: 50px; height: 50px" loop autoplay></dotlottie-player>
            </p>
          </a>
         
        
         <a href="https://github.com/"> 
            <p "><script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
                <dotlottie-player src="https://lottie.host/21aa2ecd-b8b5-47e0-ad00-83b98cfaf64b/OG0n60A6KV.lottie" background="transparent" speed="1" style="width: 35px; height: 50px" loop autoplay></dotlottie-player> </p>
          </a>
         <a href="https://www.whatsapp.com/"> 
            <p "><script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
                <dotlottie-player src="https://lottie.host/a789b15c-9be4-41c7-818d-44fe0c61b83f/9DiepklDVn.lottie" background="transparent" speed="1" style="width: 47px; height: 45px" loop autoplay></dotlottie-player> </p>
          </a>

           <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&ifkv=ASKV5Mgx-oLlk7agBNowe4lF7JjCFZNU9F4WldIfNN3cepVCLhJwi0dYQ6uSAjE3z7yc48DN5ysE6w&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S456957596%3A1747286196559177"> 
            <p "><script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
                <dotlottie-player src="https://lottie.host/0ec2840f-4179-47ed-92b0-326e78631fbc/J41hZjx1Gp.lottie" background="transparent" speed="1" style="width: 50px; height: 50px" loop autoplay></dotlottie-player> </p>
          </a>
           <a href="https://www.facebook.com/"> 
            <p "><script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
                <dotlottie-player src="https://lottie.host/f6491057-79d2-4117-9021-2d95ffb83514/hJU1Tqf7d3.lottie" background="transparent" speed="1" style="width: 50px; height: 50px" loop autoplay></dotlottie-player>
          </a>
         <a href="https://x.com/i/flow/login?lang=en"> 
            <p "><script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
                <dotlottie-player src="https://lottie.host/8ada93b6-4715-4a0f-8e14-2280db83b3d2/Nd1AnbnwxQ.lottie" background="transparent" speed="1" style="width: 47px; height: 48px" loop autoplay></dotlottie-player>     </p>
          </a>

        
        </footer>
                 
`

  
document.querySelector('.js-div-footer-below').innerHTML =footerHTML;
 let feedbackMsg;
let feedbackHTML =
    ` 
    <div class="js-feedback-left">
      <div class="feedback-div-h-left">
        <h3 class="feeback-h-left">Let us know how can we improve </h3>
      </div>
      <div style="display: flexbox; align-items: center; justify-content: center;" class="feedback-div-inp-left">
        <form action="">
          <fieldset class="feedback-fieldset-left">
            <legend>
             Anonymously 
            </legend>
            <input type="text" placeholder="Add your suggestions " name="" class="feedback-inp-left">
             <button class="done-btn js-done-btn" type="button" >done</button>
          </fieldset>
        </form>
      </div>

    </div>

    <div class="js-feedback-right js-feedback-right-hide js-feedback-right-hide1">
      <div class="feedback-div-right">
        <div class="feedback-matter-right">
          <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" 
             type="module">
            </script>
          <dotlottie-player src="https://lottie.host/760017e3-8db2-408f-aeb6-18e048751173/qxqLtnymKZ.lottie"
                    background="transparent" speed="1" style="width: 300px; height: 70px" 
                    loop autoplay>
          </dotlottie-player>
          
          <h3> The feedback help us improve,appriciate the time
             you took to send us the feedback! </h5>
          
        </div>
      </div>

    </div> `

//  function feedbackFn(){
  
//  }

document.querySelector('.js-feedback-container').innerHTML=feedbackHTML;
 let toggle;

 
document.querySelector('.js-done-btn').addEventListener('click',()=>{
  feedbackRightShow();
  // alert('gf');
});
function feedbackRightShow(){
  let clearTimeoutId;
   clearTimeout = setTimeout(()=>{
    document.querySelector('.js-feedback-right-hide').classList.remove('js-feedback-right-hide');
    feedbackMsg=  document.querySelector('.feedback-inp-left').value;
    console.log(feedbackMsg);

    toggle =true;
    //  document.querySelector('.js-feedback-right-hide1').classList.add('js-feedback-right-hide1');

  },100);

     
  

}



//  document.querySelector('.js-feedback-right-hide1').classList.remove('js-feedback-right-hide');

// function feedbackHide(toggle){
//    setTimeout(()=>{
//     console.log(toggle)
//     if(toggle){
//       // alert('dfgd')

//       document.querySelector('.js-feedback-right-hide').classList.add('js-feedback-right-hide');

//     }

//   },100);
// }



let Stops = [
  {
    id: 'tour-user',
    title: 'User Details',
    message: 'Access your account details.'
  },
  {
    id: 'tour-logo',
    title: 'This is the logo',
    message: 'It\'s a great logo.'
  },
  {
    id: 'tour-action',
    title: 'This is the CONTACT button',
    message: 'CONNECT WITH US  when you click this.'
  },
  {
    id: 'tour-elements',
    title: 'This is the NEARBY button',
    message: "HELPS TO FIGURE OUT NEARBY BUSES"
  },
  {
    id: 'tour-card',
    title: 'This is a card',
    message: "A simple card with simple details"
  },
  {
    id: 'tour-table',
    title: 'This is the ID field',
    message: "Driver ID's are listed below"
  }
]

class TourBus {
  constructor(stops){
    this.stops = stops;
    this.currentIndex = 0;
  }
  initOverlay = () => {
    // Overlay
    let overlay = document.createElement('div');
    overlay.classList.add('tour-overlay');
    document.body.append(overlay);
    // Remove on overlay click
    overlay.addEventListener('click', this.destory);
    this.overlay = overlay;
  }
  initStopBg = () => {
    // Stop Background
    let stopBg =   
        document.createElement('div');
    stopBg.classList.add('tour-stop-bg');
    document.body.append(stopBg);
    this.stopBg = stopBg;
  }
  initStopMessage = () => {
    // Stop Message
    let stopMessage =   
        document.createElement('div');
    stopMessage.classList.add('tour-message');
    document.body.append(stopMessage);
    stopMessage.innerHTML = `
      <small class="status">-</small>
      <h1 class="title">Title</h1>
      <p class="message">Message</p>
      <div class="tour-message__controls">
        <button class="back">👈</button>
        <button class="next">👉</button>
        <button class="close">👋</button>
      </div>
    `;
    let nextBtn = stopMessage.querySelector('.next');
    nextBtn.addEventListener('click', this.next);
    let backBtn = stopMessage.querySelector('.back');
    backBtn.addEventListener('click', this.back);
    let closeBtn = stopMessage.querySelector('.close');
    closeBtn.addEventListener('click', this.destory);
    this.stopMessage = stopMessage;
  }
  start = () => {    
    // Key take away: Fixed background w/correct zindex need
    this.initOverlay();
    // Key take away: White Background needs to be faked
    this.initStopBg();
    this.initStopMessage();
    window.addEventListener('resize', this.updateStop);
    window.addEventListener('scroll', this.updateStop);
    
    this.moveToStop(0);
  }
  next = () => {
    this.moveToStop(1);
  }
  back = () => {
    this.moveToStop(-1);
  }
  destory = () => {
    // Remove overlay
    this.overlay.remove();
    // Remove stop background
    this.stopBg.remove();
    // Remove message
    this.stopMessage.remove();
    // Remove Class from Current Stop
    if(this.currentStopElm){
      this.currentStopElm.classList.remove('tour-stop');
    }
    
    // Reset Index to 0
    this.currentIndex = 0;
    
    // Remove Event Listeners
    window.removeEventListener('resize', this.updateStop);
    window.removeEventListener('scroll', this.updateStop);
  }
  // direction: 1 | -1 | 0
  moveToStop = (direction) => {
    // Remove Class from Current Stop
    if(this.currentStopElm){
      this.currentStopElm.classList.remove('tour-stop');
    }
    // Increase Stop Index Count
    this.currentIndex = this.currentIndex + direction;
    
    if(!this.stops[this.currentIndex]){
      this.currentIndex = direction > 0 ? 0 : this.stops.length - 1;
    }
    
    // Find Node Location and Set
    this.currentStopElm = document.getElementById(
      this.stops[this.currentIndex].id
    );
    
    this.currentStopElm.classList.add('tour-stop');
    
    this.updateStop();
  }
  updateStop = () => {
    if(!this.currentStopElm) return;
    let style = this.currentStopElm.getBoundingClientRect();
    let currentStop = this.stops[this.currentIndex];
    
    this.updateStopBg(style);
    this.updateMessageText(currentStop);
    this.updateMessagePosition(style)
  }
  // getBoundingClientRect styles
  updateStopBg = (style) => {
    this.stopBg.style.top = style.top + 'px';
    this.stopBg.style.left = style.left + 'px';
    this.stopBg.style.width = style.width + 'px';
    this.stopBg.style.height = style.height + 'px';
  }
  // Stop format - id, title, message
  updateMessageText = (currentStop) => {
    // Update Text
    let title = this.stopMessage.querySelector('.title');
    let message = this.stopMessage.querySelector('.message');
    let status = this.stopMessage.querySelector('.status');
    
    title.textContent = currentStop.title;
    message.textContent = currentStop.message;
    status.textContent = `${this.currentIndex + 1} of ${this.stops.length}`
  }
  // getBoundingClientRect styles
  updateMessagePosition = (style) => {
    // Location for Message
    let wWidth = window.innerWidth;
    let wHeight = window.innerHeight;
    
    let top, left, bottom, right, 
        messageHeight = this.stopMessage.offsetHeight,
        messageWidth = this.stopMessage.offsetWidth;
    
    // Right Position
    top = (style.top + (style.height/2)) - (messageHeight/2);
    left = (style.left + style.width + 40);
    
    bottom = (top + messageHeight);
    right = (left + messageWidth);
    
    // If window width is larger than right side
    // And window height is larger than bottom
    if(wWidth > right && wHeight > bottom){
      this.stopMessage.style.top = (top > 0 ? top : 20) + "px";
      this.stopMessage.style.left = left + "px";
      return;
    }
    
    // Bottom Position
    top = (style.bottom + 40);
    left = (style.left + (style.width/2)) - (messageWidth/2);

    bottom = (top + messageHeight);
    right = (left + messageWidth);
    
    // If window width is larger than right side
    // And window height is larger than bottom
    if(wWidth > right && wHeight > bottom){
      this.stopMessage.style.top = top + "px";
      this.stopMessage.style.left = (left > 0 ? left : 20) + "px";
      return;
    }    
    
    // Left Position
    top = (style.top + (style.height/2)) - (messageHeight/2);
    left = (style.left - messageWidth - 40 );
    
    bottom = (top + messageHeight);
    right = (left + messageWidth);
    
    if(wWidth > right && wHeight > bottom){
      
      this.stopMessage.style.top = (top > 0 ? top : 20) + "px";
      this.stopMessage.style.left = left + "px";
      return;
    }   
    
    // Top Position
    top = (style.top - messageHeight - 40);
    left = (style.left + (style.width/2)) - (messageWidth/2);
    
    bottom = (top + messageHeight);
    right = (left + messageWidth);
    
    if(wWidth > right && top > 0){
      this.stopMessage.style.top = top + "px";
      this.stopMessage.style.left = (left > 0 ? left : 20) + "px";
      return;
    }
  }
}

const pageTour = new TourBus(Stops);
pageTour.start();

// New Tour Action
const newTour = document.getElementById('start-tour');
newTour.addEventListener('click', pageTour.start);