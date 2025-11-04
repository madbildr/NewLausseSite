document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menu Toggle Logic for About Page ---
    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
        });
    }

    // --- FAQ Toggle Logic (Existing Code) ---
    const faqContainer = document.getElementById('faq-container');
    if (!faqContainer) return;

    const faqQuestions = faqContainer.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parentItem = question.closest('.faq-item');
            
            // Close any currently open FAQ item
            faqContainer.querySelectorAll('.faq-item').forEach(item => {
                if (item !== parentItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });

            // Toggle the 'active' class on the clicked item's parent
            parentItem.classList.toggle('active');
        });
    });
});