import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    // const [language, setLanguage] = useState('en');

    // // Function to fetch translation from Google Translate API
    // const translatePage = async (targetLang) => {
    //     const elementsToTranslate = document.querySelectorAll('[data-translate]');
    //     const textArray = Array.from(elementsToTranslate).map(el => el.innerText);
        
    //     try {
    //         const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=YOUR_API_KEY`, {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //                 q: textArray,
    //                 target: targetLang
    //             })
    //         });

    //         const result = await response.json();
    //         const translatedTexts = result.data.translations.map(t => t.translatedText);

    //         elementsToTranslate.forEach((el, index) => {
    //             el.innerText = translatedTexts[index];
    //         });

    //         setLanguage(targetLang);
    //     } catch (error) {
    //         console.error("Translation Error:", error);
    //     }
    // };

    return (
        <header className='Navbar'>
            <div className="logo">Fresh<span>Market</span></div>
            
            {/* Hamburger Icon */}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            {/* Navigation Menu */}
            <nav className={menuOpen ? "active" : ""}>
                <ul>
                    <li><Link to="/" data-translate>Home</Link></li>
                    <li><Link to="/shop" data-translate>Shop</Link></li>
                    <li><Link to="/categories" data-translate>Categories</Link></li>
                    <li><Link to="/about" data-translate>About</Link></li>
                    <li><Link to="/orders" data-translate>Orders</Link></li>
                    <li><Link to="/todayprice" data-translate>Today Market</Link></li>
                </ul>
            </nav>

            {/* Search Bar */}
            <div className="search-container">
                <input type="text" placeholder="Search products..." data-translate />
                <i className="fas fa-search"></i>
            </div>

            {/* Icons */}
            <div className="icons">
                <Link to="/favorites"><i className="fas fa-heart"></i></Link>
                <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                <Link to="/login"><i className="fas fa-user"></i></Link>
            </div>

            
            {/* <div className="language-toggle">
                <label className="switch">
                    <input type="checkbox" onChange={() => translatePage(language === 'en' ? 'ne' : 'en')} />
                    <span className="slider round"></span>
                </label>
                <span>{language === 'en' ? '🇬🇧 English' : '🇳🇵 नेपाली'}</span>
            </div> */}
        </header>
    );
}
