document.addEventListener('DOMContentLoaded', function() {
    const enrollmentForm = document.getElementById('enrollment-form');

    enrollmentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // You can add your enrollment logic here, e.g., send data to a server or display a confirmation message.
        alert('Thank you for enrolling in the Blender Sculpting Stylized Character Course!');
    });
});
