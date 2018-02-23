import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import styles from './home.css';
import Wreath from '../../components/wreath';
import Logo from '../../components/logo'
import LadyLink from '../../components/navLink/ladyLink';
import GentlemanLink from '../../components/navLink/gentlemanLink';
import Hamburger from '../hamburger';
class Home extends Component {
    render() {
        return(
            <div>
                    <Hamburger/>
                    <div className={styles.box}>
                        <Logo/>
                        <Wreath/>
                        <LadyLink productType='women'/>
                        <GentlemanLink productType='men'/>
                    </div>
            </div>
           
        )
    }
}

export default Home;

