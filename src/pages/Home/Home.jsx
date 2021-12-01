import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import styles from "./Home.module.css";
import Card from "../../components/shared/Card/Card";
import Button from '../../components/shared/Button/Button';

const Home = () => {
    const signInLinkStyle = {
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px',
    };
    const navigate = useNavigate();

    function startRegister(){
        navigate('/register');
    }

    return (
        <div className={styles.cardWrapper}>
            <Card title="Welcome to CodersHub!" icon="logo">
                <p className={styles.text}>
                    CodersHub is a free app that combines the voice chat aspects of services like Skype and Teamspeak with the text chat aspects of WebRTC.</p>
                <div>
                    <Button onClick={startRegister} text="Get Your Username"/>
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an invite text?</span>
                        <Link style={signInLinkStyle} to="/login">Sign in</Link>
                </div>
            </Card>
        </div>
    );
};

export default Home;
