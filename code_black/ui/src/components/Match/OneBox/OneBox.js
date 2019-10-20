import React, { Component } from 'react';

class OneBox extends Component {

    state = {
        animateOut: "",
        showDetails: false
    }

    hate = () => {
        this.setState({
            animateOut: 'fadeOutLeft'
        })
    }

    like = () => {
        this.setState({
            animateOut: 'fadeOutRight'
        })
    }

    showDetails = () => {
        this.setState((prevState, props) => {
            return {
                showDetails: !prevState.showDetails
            }
        });
    }

    render() {
        return(
            <div className={"match-ui animated " + this.state.animateOut} id="1" refs="Match1">
                <div className="info">
                   <div className="short-info">
                       <p>"{this.props.data.headline}"</p>
                   </div>
                   <div className="row justify-content-between">
                       <div className="name col-8">
                           <span className="name-span">{this.props.data.name}</span>
                           <span><a href="www.encury.com">{this.props.data.website}</a></span>
                       </div>
                       <div className="read-more col-3" onClick={this.showDetails}>
                           <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
                       </div>
                   </div>
                </div>
               <div className="depth">
                   <p>
                       "{this.props.data.bio}"
                   </p>
               {this.state.showDetails ? 
                   <span>
                       <hr />
                       <p>Looking for: {this.props.data.fundReq} for {this.props.data.fundTime}</p>
                       <p>Dilution: {this.props.data.dilution}</p>
                       <p>Location: {this.props.data.location}</p>
                       <p>Startup Stage: {this.props.data.stage}</p>
                       <p>Commitment: {this.props.data.commitment}</p>
                       <p>Number of Users: {this.props.data.users}</p>
                       <p>Any Previous Fundings: {this.props.data.prevFund ? "Yes" : "No"}</p>
                       <p>Type of Firm: {this.props.data.firmType}</p>
                       <hr />
                       <p onClick="" className="report-btn">Report Startup</p>
                       <hr />
                   </span>
                 : null }
               </div>
                <div className="container-fluid mt-4 mb-3 buttons">
                   <div className="row justify-content-around">
                       <div className="col-3">
                           <i class="fa fa-times" aria-hidden="true" onClick={this.hate}></i>
                       </div>
                       <div className="col-3">
                           <i class="fa fa-check text-success" aria-hidden="true" onClick={this.like}></i>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default OneBox;