import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <footer className="footer">
      <div className="footer-content">
        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/titlecards">Popular Movies</a></li>
            <li><a href="/titlecards">Movie Series</a></li>
            <li><a href="/titlecards">Top 5</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://youtube.com">YouTube</a></li>
          </ul>
        </div>

        {/* Legal Information */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-use">Terms of Use</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
