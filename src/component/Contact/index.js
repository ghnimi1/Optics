import React from 'react';
import { ContactSection,ContactTitle,TitleBar,AdresCont, Adre,TitleInfo,Icon,Cont,Inp,TextAre,Button,Span } from './style';
const Contact = () => {
    return (
        <ContactSection>
                <div className="container">
                   <ContactTitle>Contact Us</ContactTitle>
                       <TitleBar></TitleBar>
                       <AdresCont>
                           <Adre>
                               <TitleInfo>Contact info</TitleInfo>
                               <Icon className="fa fa-map-marker"><Span>sidi bouzid souk jedid 9121</Span></Icon>
                               <Icon className="fa fa-envelope"><Span>ghnimih@gmail.com</Span></Icon>
                               <Icon className="fa fa-mobile"><Span>29554879</Span></Icon>
                           </Adre>
                           <Cont>
                           <TitleInfo>Leave us a message</TitleInfo>
                           <Inp type="text" placeholder="Your Name"/>
                           <Inp type="email" placeholder="Your Email"/>
                           <TextAre cols="30" rows="10" placeholder="Your Message"></TextAre>
                           <Button>Send Message</Button>

                           </Cont>
                       </AdresCont>
                </div>
            </ContactSection>
    )
}
export default Contact;