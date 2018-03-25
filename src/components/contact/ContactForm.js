import classnames from 'classnames'
import React from 'react'

import './ContactForm.css'

const VALID_EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const VALID_PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

class ContactForm extends React.PureComponent {
    constructor(props) {
        super(props)
        
        this.form = null
        this.state = {
            email: {
                error: false,
                value: ''
            },
            name: {
                error: false,
                value: ''
            },
            message: {
                error: false,
                value: ''
            },
            phone: {
                error: false,
                value: ''
            },
        };
        this.submitForm = this.submitForm.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    
    submitForm(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const hasValidationError = this.validateForm();
        
        if (hasValidationError) {
        console.log('nope, validation is badddd');
            return false;
        } else {
            this.form.setAttribute('action', 'https://formspree.io/tntcuts@gmail.com');
            this.form.submit();
        }
    }
    
    updateValue(fieldName) {
        return e => {
            console.log(e.target)
            this.setState({ 
                [fieldName]: {
                    error: false,
                    value: e.target.value,
                }
            });
        }
    }
    
    validateForm() {
        let hasValidationError = false;
        
        // Check for length
        [ 'email', 'name', 'message', 'phone' ].forEach(fieldName => {
            if (!this.state[fieldName].value || this.state[fieldName].value.length < 2) {
                hasValidationError = true;
                this.setState(prevState => ({
                    [fieldName]: {
                        error: true,
                        value: prevState[fieldName].value,
                    }
                }));
            }
        });
        
        // Test email
        if (!this.state.email.value.match(VALID_EMAIL_REGEX)) {
            hasValidationError = true;
            this.setState(prevState => ({ 
                email: { 
                    error: true,
                    value: prevState.email.value,
                }
            }));
        }
        
        // Test phone
        if (!this.state.phone.value.match(VALID_PHONE_REGEX)) {
            hasValidationError = true;
            this.setState(prevState => ({ 
                phone: { 
                    error: true,
                    value: prevState.phone.value,
                }
            }));
        }
        
        return hasValidationError;
    }
    
    render() {
        return (
            <form 
                className='contact-form'
                method='post'
                onSubmit={ this.submitForm }
                ref={ f => { this.form = f }}
            >
                <div className={classnames({
                    'input-error': this.state.name.error,
                    'input-error--name': this.state.name.error,
                })}>
                    <input
                        name='name'
                        onChange={ this.updateValue('name') }
                        placeholder='Your name'
                        type='text'
                        value={ this.state.name.value }
                    />
                </div>
                <div className={classnames({
                    'input-error': this.state.email.error,
                    'input-error--email': this.state.email.error,
                })}>
                    <input
                        name='_replyto'
                        onChange={ this.updateValue('email') }
                        placeholder='Email address'
                        type='email'
                        value={ this.state.email.value }
                    />
                </div>
                <div className={classnames({
                    'input-error': this.state.phone.error,
                    'input-error--phone': this.state.phone.error,
                })}>
                    <input
                        name='phone'
                        onChange={ this.updateValue('phone') }
                        placeholder='Phone number'
                        type='tel'
                        value={ this.state.phone.value }
                    />
                </div>
                <div className={classnames({
                    'input-error': this.state.message.error,
                    'input-error--message': this.state.message.error,
                })}>
                    <textarea 
                        name='message'
                        onChange={ this.updateValue('message') }
                        placeholder='Message'
                        rows={8}
                        value={ this.state.message.value }
                    />
                </div>
                
                <input type='hidden' name='_subject' value='TNT Cuts Online Form Submission' />
                <input type='hidden' name='_language' value='en' />
                <input type='hidden' name='_next' value='//tntcuts.com/contact-confirmation/' />
                <input type='text' name='_gotcha' style={{ display: 'none' }} />
                
                <input type='submit' value='Send Message' />
            </form>
        )
    }
}

export default ContactForm