/**
 * Entry point for about.html.
 */
import '../../styles/main.css';
import { initMenu } from '../modules/menu.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();

  // FAQ accordion logic
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

      parentItem.classList.toggle('active');
    });
  });
});
