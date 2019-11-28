import React, {Component} from 'react';
import {PortfolioSection,PortfolioTitle,TitleBar, Part, Image,ListLi,ListUl} from './style'
import Axios from 'axios';
class Portfolio extends Component {
    state = {
        portfoli : []
    }
    componentDidMount(){
        Axios.get('js/data.json').then(res => {this.setState({portfoli :res.data.portfolio})})
    }
    render(){
        const portfoli=this.state.portfoli;
        const portList= portfoli.map(port => {
            return(
                <Part act={port.id} key={port.id}>
                    <Image src={port.image}/>
                </Part>
            )
        })
        return (
            <PortfolioSection>
                <div className="container">
                   <PortfolioTitle>Portfolio</PortfolioTitle>
                       <TitleBar></TitleBar>
                       <ListUl>
                       <ListLi active>All</ListLi>
                       <ListLi>Web design</ListLi>
                       <ListLi>Mobile</ListLi>
                       <ListLi>Desktop</ListLi>
                       </ListUl>
                       {portList}
                </div>
            </PortfolioSection>
        )

    }
    
}
export default Portfolio;