import React, {useState, useEffect} from 'react';
import { ServiceSection, ServiceTitle ,TitleBar, Part, Icon, TitlePart,BarPart,DesPart} from './style';
import Axios from 'axios';

const Services = () => {
    const [servises, setService] = useState([]);
    useEffect (() => {
        Axios.get('js/data.json').then(res => {setService(res.data.services)})
    },[])
    const ServiceList = servises.map(res => {
        return(
            <Part active={res.id} key={res.id}>
                       <Icon className={res.icon_name}></Icon>
                       <TitlePart>{res.title}</TitlePart>
                       <BarPart></BarPart>
                 <DesPart>{res.body}</DesPart>
            </Part>
        )
    })
    return (
        <ServiceSection>
            <div className="container">
               <ServiceTitle>Services</ServiceTitle>
                   <TitleBar></TitleBar>
                   {ServiceList}

            </div>
                </ServiceSection>
    )
}
export default Services;