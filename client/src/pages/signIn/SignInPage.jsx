
import styles from './SignInPage.module.css';
import React, {useState}from 'react';
import NavBar from '../../components/navbars/NavBar'


export default function SignInPage({onSignIn}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(onSignIn){
            onSignIn({email, password, isSignUp})
        }
    }

    return (
        <div className={styles.pageWrapper}>
            <div className = {styles.nav}>
                <NavBar />
            </div>
            
            <div className={styles.container}>
                
                <div className={styles.authCard}>
                
                    <h1 className={styles.title}>
                        {isSignUp ? 'Create an Account' : 'Welcome Back'}
                    </h1>
                    
                    <p className={styles.subtitle}>
                        {isSignUp 
                        ? 'Sign up to start saving and rating your favorite movies.' 
                        : 'Sign in to access your watchlist and reviews.'}
                    </p>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label}>Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className={styles.input}
                            />
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            {isSignUp ? 'Sign Up' : 'Sign In'}
                        </button>
                    </form>

                    <div className={styles.switchMode}>
                        <p>
                            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                            <button
                                type="button"
                                className={styles.switchButton}
                                onClick={() => setIsSignUp(!isSignUp)}
                            >
                                {isSignUp ? 'Sign In' : 'Sign Up'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}