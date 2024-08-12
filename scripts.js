
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('nav ul');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Function to handle adding product to cart and initiating Razorpay payment
function addToCart() {
    const options = {
        key: 'rzp_test_MTjB2TRRhKXJqH', // Replace with your Razorpay API key
        amount: 5000, // Amount in paisa (e.g., Rs 50 = 5000 paisa)
        currency: 'INR',
        name: 'Cannabis Store',
        description: 'Purchase Flavoured Joint',
        image: 'http://127.0.0.1:5500/Screenshot%202024-06-13%20012909.png', // Replace with your logo URL
        handler: function(response) {
            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
            // You can add more logic here after successful payment
        },
        prefill: {
            name: '', // Customer's name
            email: '', // Customer's email
            contact: '' // Customer's phone number
        },
        theme: {
            color: '#2b9b3e'
        }
    };

    const rzp = new Razorpay(options);
    rzp.open();
}
let isPlaying = false;
        let isMuted = true;
        const video = document.getElementById('background-video');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const muteBtn = document.getElementById('muteBtn');

        function togglePlayPause() {
            if (isPlaying) {
                video.pause();
                playPauseBtn.textContent = 'Play';
            } else {
                video.play();
                playPauseBtn.textContent = 'Pause';
            }
            isPlaying = !isPlaying;
        }

        function toggleMute() {
            if (isMuted) {
                video.muted = false;
                muteBtn.textContent = 'Mute';
            } else {
                video.muted = true;
                muteBtn.textContent = 'Unmute';
            }
            isMuted = !isMuted;
        }