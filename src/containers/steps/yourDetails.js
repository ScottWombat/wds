import React,{Component} from 'react';
import styles from './yourDetails.css';
import styles1 from './index.css';
import { Link  } from 'react-router-dom';
class YourDetails extends Component {
  constructor(props,context){
        super(props,context);
        this.state = {fName: '', lName: '',pwd: '',email: '',mobile: ''};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
   }
  handleSubmit(e){
      e.preventDefault();
     // console.log(JSON.stringify(this.state, null, 4))
      let customerInfo = localStorage.getItem('customerInfo');
      var customerInfoObj = JSON.parse(customerInfo);
      customerInfoObj.firstName= this.state.fName;
      customerInfoObj.lastName = this.state.lName;
      customerInfoObj.email=this.state.email;
      customerInfoObj.pwd = this.state.pwd;
      customerInfoObj.mobile = this.state.mobile;
      
      localStorage.removeItem('customerInfo');
      localStorage.setItem('customerInfo',JSON.stringify(customerInfoObj))
      //console.info(localStorage.getItem("customerInfo"))
  }
 
  handleChange(e){
      const target = e.target;
      const name = target.name;
      const value = target.value;
      this.setState(state =>({[name]: value}))
  }
    
  componentDidMount(){
      //let data = localStorage.getItem('customerInfo');
      //console.log(data);
  }    
  render(){
  return (
      <div className={styles.flex_container}>
      <div className={styles.inner_element}>
        <div className={styles.title}>Your Details</div>
        <form onSubmit={this.handleSubmit}>
             
             <div style={{display:'flex'}}>
             <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" name='fname' value={this.state.fName} onChange={this.handleChange} id='fname'/>
                <label htmlFor='fname'>First Name</label>
            </div>
      
            <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" id='lname' name='lname' value={this.state.lName} onChange={this.handleChange}/>
                <label htmlFor='lname'>Last Name</label>
            </div>
            </div>
            <br/>
           <div style={{display:'flex'}}>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" id='pwd' name='pwd' value={this.state.pwd} onChange={this.handleChange}/>
                <label htmlFor='pwd'>Password</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" id='email' name='email' value={this.state.email} onChange={this.handleChange}/>
                <label htmlFor='email'>Email</label>
                </div>
            </div>
          <br/>
           <div style={{display:'flex'}}>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                <input type="text" id='mobile' name='mobile' value={this.state.mobile} onChange={this.handleChange}/>
                <label htmlFor='mobile'>Mobile</label>
                </div>
                <div className={styles.group} style={{margin:'15px',flex:'1'}}>      
                &nbsp;
                </div>
            </div>
	        <div className={styles1.btn_nav}>
                               <a className={styles1.btn}>&lt;&nbsp;Shopping Bag</a>
                               <a className={styles1.btn} onClick={(e) => {this.handleSubmit(e)}}>Payment&nbsp;&gt;</a> 
                               <Link to='/' className={styles1.btn}>
                                cancel
                                </Link>
            </div>
        
      </form>
      </div>
    </div>
  );
  }
}

export default YourDetails;