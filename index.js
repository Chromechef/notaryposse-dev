

const mediaQuery = '(max-width: 600px)';
// const mediaQueryList = window.matchMedia(mediaQuery);

// Modal
const openModalButtons = document.querySelectorAll(".open-modal")
const modal = document.getElementById('modal')
const schoolText = document.getElementById('school-text')
const schoolInfoButton = document.getElementById('school-button')
const notaryInfoButton = document.getElementById('virtual-button')
const seniorInfoButton = document.getElementById('senior-button')
const apostilleInfoButton = document.getElementById('apostille-button')
const mobileInfoButton = document.getElementById('mobile-button')

let modalOpen = false

function sendEmail() {
    Email.send({
        SecureToken: "04900a6f-4f14-42bd-8efc-df63a1555af5",
        To: 'teri@notaryposse.com',
        From: "chefjimmy09@gmail.com",
        Subject: "Email from Notary Posse Website",
        Body: "Name : " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("mail has been sent sucessfully")
    )
}

for (const button of openModalButtons) {
    modalOpen = true
    button.addEventListener("click", function () {
        document.getElementById("overlay").style.display = "block";
    })
    if (modalOpen) {
        document.getElementById("modal").addEventListener("click", function () {
            document.getElementById("overlay").style.display = "none";
            modal.innerHTML = ''
            modalOpen = false
        })
    }

}


// mediaQueryList.addEventListener('change', event => {
//     console.log(window.innerWidth);

//     if (event.matches) {
//         console.log('The window is now under 600px');
//     } else {

//         console.log('The window is now over 600px');

//     }
// })





const schoolInnerHtml =
    `
    <h3 class="text-orange">School Notary</h3>

    <p>When using documents from our site we have already confirmed that documents
    can be Remote Online Notarized. Or again, we can come to your home or meet you 
    somewhere.Even Elementary schools have some forms that may need to be notarized</p>
    <button id="close-modal">Return</button>
    `

const virtualNotaryHtml =
    `
    <h3 class="text-orange">Virtual Notary </h3>
                        
    <p>You will answer some knowledge based questions.                              
    You show your ID and the system will confirm identity.
    Entire notarization is recorded and documents signed electronically.
    You are then emailed or can download the Notarized document.
    Side note, whoever the end user is (DMV, Hospital etc.)
    will determine if they will accept a Remote Online Notarized Form.</p>
    <button id="close-modal">Return</button>
    `

const seniorCommunityHtml =
    `
    <h3 class="text-orange open-modal">Senior Community</h3>   
    
    <p>We needed a Power of Attorney notarized for my Dad.
    But leaving the house was so very difficult for him to do.
    OK, I need to find a Notary...Asked all my
    friends and one of them was a Notary. She came over that evening assessed if he was
    competent and coherent and willing to sign the papers.
    Sometimes Medication can make our Seniors "loopy" or confused.
    so we need to time the notarization carefully for them. She was so amazing,
    I knew I had to do the same!</p>
    <button id="close-modal">Return</button>
                                     
    `

const apostilleServicesHtml =
    `
    <h3 class="text-orange">Apostille Services</h3>
                        
    <p> 
    You will need documents certified (Apostille) to be accepted by the Country of Destination.
    It can get overwhelming, what countries are part of the Hague Convention, does this
    document go to the Secretary of State or an Embassy? Let us cut through all the red tape.
    We draw onyears of experience knowing which route to send them or walk them through. </p>
    <button id="close-modal">Return</button>
    `

const mobileNotaryPublicHtml =
    `
    <h3 class="text-orange">Mobile Notary Public</h3>
                                              
    <p>Most Banks will only Notarize their own documents, if they
    even do that. Being a Mobile Notary Public allows me to come to you.
    Or we can meet somewhere, for instance a coffee shop, DMV, Hospital etc.
    There is no reason for you to drive to try and find a Notary. 
    I am here when you need me!</p>
    <button id="close-modal">Return</button>
    `




schoolInfoButton.addEventListener("click", () => {
    modal.innerHTML = schoolInnerHtml
})

notaryInfoButton.addEventListener("click", () => {
    modal.innerHTML = virtualNotaryHtml
})

seniorInfoButton.addEventListener("click", () => {
    modal.innerHTML = seniorCommunityHtml
})

apostilleInfoButton.addEventListener("click", () => {
    modal.innerHTML = apostilleServicesHtml
})

mobileInfoButton.addEventListener("click", () => {
    modal.innerHTML = mobileNotaryPublicHtml
})




