import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';


export default function Navbar() {
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Track window width for responsive search bar
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Check auth state on mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (token && storedUser) {
        setUser(storedUser);
        }
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setDropdownOpen(false);
        navigate('/signin');
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
        navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        setSearchQuery('');
        }
    };

    const isWideScreen = windowWidth > 600; 

    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <Link to="/" className={styles.logo}>CineTrack</Link>
            </div>

            <div className = {styles.linkContainer}>
                {isWideScreen ? 
                    (
                        <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
                            <input 
                            type="text" 
                            placeholder="Search movies..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={styles.searchInput}
                            />
                            
                            <button type="submit" className={styles.searchBtn}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </form>
                    ) : (
                        <Link to="/search" className={styles.searchIconBtn} aria-label= "Go to search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </Link>
                )}
                
                {user ? 
                    (
                        <div className={styles.menuContainer} ref={dropdownRef}>
                            <button 
                            className={styles.userIcon}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            aria-label="User menu"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </button>

                            {dropdownOpen && (
                                <div className={styles.dropdownMenu}>
                                    <Link to="/list" className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                                        Watchlist
                                    </Link>
                                    <div className={styles.dropdownDivider}></div>
                                    <button className={`${styles.dropdownItem} ${styles.logout}`} onClick={handleSignOut}>
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/signin" className={styles.signinBtn}>
                            Sign In
                        </Link>
                    )
                }

            </div>
        </nav>
    );
}