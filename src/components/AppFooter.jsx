import footerBg from "../assets/img/footer-bg.jpg";
import footerFacebook from "../assets/img/footer-facebook.png";
import footerTwitter from "../assets/img/footer-twitter.png";
import footerYoutube from "../assets/img/footer-youtube.png";
import footerPinterest from "../assets/img/footer-pinterest.png";
import footerPeriscope from "../assets/img/footer-periscope.png";

const footerLinks = [
    { id: 1, text: "Terms Of Use", url: "#" },
    { id: 2, text: "Privacy policy (New)", url: "#" },
    { id: 3, text: "Ad Choices", url: "#" },
    { id: 4, text: "Advertising", url: "#" },
    { id: 5, text: "Jobs", url: "#" },
    { id: 6, text: "Subscriptions", url: "#" },
    { id: 7, text: "Talent Workshops", url: "#" },
    { id: 8, text: "CPSC Certificates", url: "#" },
    { id: 9, text: "Ratings", url: "#" },
    { id: 10, text: "Shop Help", url: "#" },
    { id: 11, text: "Contact Us", url: "#" },
];

const socialLinks = [
    { id: 1, name: "Facebook", img: footerFacebook, url: "#" },
    { id: 2, name: "Twitter", img: footerTwitter, url: "#" },
    { id: 3, name: "YouTube", img: footerYoutube, url: "#" },
    { id: 4, name: "Pinterest", img: footerPinterest, url: "#" },
    { id: 5, name: "Periscope", img: footerPeriscope, url: "#" },
];

function AppFooter() {
    return (
        <footer className="app-footer">
            <div
                className="footer-top"
                style={{ backgroundImage: `url(${footerBg})` }}
            >
                <div className="footer-container">
                    <nav className="footer-nav">
                        <ul>
                            {footerLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-container footer-bottom-content">
                    <button type="button" className="signup-btn">
                        SIGN-UP NOW!
                    </button>
                    <div className="footer-socials">
                        <span className="follow-us">FOLLOW US</span>
                        <div className="social-icons">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.id}
                                    href={social.url}
                                    aria-label={social.name}
                                >
                                    <img src={social.img} alt={social.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default AppFooter;
