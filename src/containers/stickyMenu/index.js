import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import sticky from './sticky_slider.css';
import { Link  } from 'react-router-dom';
const StickyMenu = () => {
  return (
      <div className={sticky.sticky_container}>
                        <div className={sticky.menu}>
                         <Link to='/' className={sticky.menuLink}>
                         &nbsp;
                         <i className="fa fa-home fa-2x"></i>
                         &nbsp;home&nbsp;
                        </Link>
                        </div>
                        <div className={sticky.menu}>
                       <Link to='/comingSoon' className={sticky.menuLink}>
                        &nbsp;
                        <i className="fa fa-shopping-cart fa-2x"></i>
                        &nbsp;check out&nbsp;
                        </Link>
                        </div>
                        <div className={sticky.menu}>
                        <Link to='/comingSoon' className={sticky.menuLink}>
                        &nbsp;
                        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                        &nbsp;contact&nbsp;
                        </Link>
                        </div>
                        <div className={sticky.menu}>
                        <Link to='/comingSoon' className={sticky.menuLink}>
                        &nbsp;
                        <i className="fa fa-bath fa-2x" aria-hidden="true"></i>
                        &nbsp;about&nbsp;
                        </Link>
                        </div>
                        <div className={sticky.menu_arrow}>
                        <div className={sticky.arrow_right}/>
                        </div>
                    
      </div>
  )
}
export default StickyMenu;