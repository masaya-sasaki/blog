import {useState, useRef} from 'react'
import styles from './Contact.module.css'

export default function Contact(){
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const fn = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!fName){
            alert('Please enter your first name.')
            fn.current.focus()
            return false 
        }
        if(!lName){
            alert('Please enter your last name.')
            return false 
        }
        if(!email){
            alert('Please enter your email.')
            return false 
        }
        if(!message){
            alert('Please enter your message')
            return false 
        }
        else{
            alert('The following form data was submitted.: ' + `First Name: ${fName}, Last Name: ${lName}, Email: ${email}, Message: ${message}`);
        }
    }

    return (
        <section id='contact' className={styles.container}>
            <h2
            className={styles.title}
            >CONTACT</h2>
            <div className={styles.formcontainer}>
                <form className={styles.formbox} onSubmit={(e)=>handleSubmit(e)}>
                    <label className={styles.label1}>
                        First Name*
                        <input className={styles.blueInput} ref={fn} type='text' name='firstname' onChange={(e)=>setFName(e.target.value)} value={fName}/>
                    </label>
                    <label className={styles.label2}>
                        Last Name*
                        <input type='text' name='lastname' onChange={(e)=>setLName(e.target.value)} value={lName}/>
                    </label>
                    <label className={styles.label3}>
                        Email*
                        <input type='text' name='email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    </label>
                    <label className={styles.label4}>
                        Your message*
                        <textarea name='message'  onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
                    </label>
                    <button className={styles.submit} type='submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}