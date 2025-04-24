// main.js

document.addEventListener('DOMContentLoaded', () => {
    const posts = [
      {
        title: "Understanding JavaScript Closures",
        summary: "A deep dive into closures, scope, and execution context in JavaScript.",
        link: "#"
      },
      {
        title: "Getting Started with Linux Commands",
        summary: "An essential guide to navigating and using the Linux terminal effectively.",
        link: "#"
      },
      {
        title: "What is Cross-Site Scripting (XSS)?",
        summary: "An overview of XSS attacks, their types, and how to prevent them in your web apps.",
        link: "#"
      }
    ];
  
    const blogSection = document.getElementById('blog-posts');
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post-card');
  
      postDiv.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
        <a href="${post.link}">Read more →</a>
      `;
  
      blogSection.appendChild(postDiv);
    });
  });
  