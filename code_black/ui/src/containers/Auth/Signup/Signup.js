import React, { Component } from 'react';

import './Signup.css';
import { isNullOrUndefined } from 'util';

class Signup extends Component {

    state = {
        step: 1,
        user: null,
        name: null,
        entity: null,
        regDate: null,
        email: null,
        password: null,
        location: null,
        headline: null,
        stage: null,
        businessModel: null,
        users: 0,
        year1: {
            expenses: null,
            revenue: null
        },
        year3: {
            expenses: null,
            revenue: null
        },
        year5: {
            expenses: null,
            revenue: null
        }
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleEntityChange = event => {
        this.setState({
            entity: event.target.value
        })
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleRegDateChange = event => {
        this.setState({
            regDate: event.target.value
        })
    }

    handleLocationChange = event => {
        this.setState({
            location: event.target.value
        })
    }

    handleHeadlineChange = event => {
        this.setState({
            headline: event.target.value
        })
    }

    handleStageChange = event => {
        this.setState({
            stage: event.target.value
        })
    }

    handleBusinessModelChange = event => {
        this.setState({
            businessModel: event.target.value
        })
    }

    handleUserChange = event => {
        this.setState({
            users: event.target.value
        })
    }
    

    setUser = user => {
        this.setState({
            step: 2,
            user: user
        })
    }

    goBack = () => {
        this.setState((prevState, props) => {
            return {
                step: prevState.step - 1
            }
        })
    }

    nextStep = event => {
        event.preventDefault();
        this.setState((prevState, props) => {
            return {
                step: prevState.step + 1   
            }
        })
    }

    render() {
        return(
            <div className="signupDiv">
                <h2>Signup</h2>
                <div class="progress mb-5 mt-1">
                    <div class="progress-bar" style={{width: 100*this.state.step/5 + "%"}}>Step {this.state.step}/5</div>
                </div>
                <form>
                    {this.state.step !== 1 ? <p onClick={this.goBack} style={{cursor: 'pointer'}}><i className="fa fa-chevron-left"></i> Back</p> : null}
                    {this.state.step === 1 ? <div className="container-fluid">
                        <div className="row">
                            <p className="d-block text-center col-12">Who are you?</p>
                        </div>
                        <div className="row justify-content-around">
                            <div className="investor col-4 text-center" onClick={() => this.setUser(1)}>
                                <img width="80" height="80" src={'https://image.flaticon.com/icons/png/512/1463/1463515.png'} />
                                <span className="d-block mt-2">An Investor</span>
                            </div>
                            <div className="startup col-4 text-center" onClick={() => this.setUser(2)}>
                                <img width="80" height="80" src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABYlBMVEVx4u////84xtnTWTO1QyTQ0dPqoi//f08nO3o4aJVq4e7o6epc1+Zl4O7Q0tRs5/XWUyi4PRcwU4gwyt+/8feXztfUViytmZCHgX/Rzc3rcknqbULHUS7Fm5Tqt6tLz+C7NgCG5vHp+vzS9fmc6vORko7aUB9/iYmyPCOt7fXpnh/2/f7m+fy68Pb00qbfv5qiqKN6j5G6OQ3cThsQLHQmXo+3QB7pni+h6/S/0tZ/zdmt0NceNHfY3+essb5t0+G9UyXWZDLKbCjcdzHiijDfkCy3dGDTfCrQ6Oyp3OOOztnU3OXDz9yQmK+9wsqYrMNveZxhhKdDVIdpiatGVohmydhEcZt0fp6yt8KgwsjKlIvXQQCcsK9xl5xgp7FHusnIbFGnVkOeZFevloxqoqqReXTLYUKwSzGOeXXCXSaHubvYg2z25uLpwbfdl4XHgnTVXB/vz8TtwJDvuXzqrGHkoUkHG3nOAAAOYElEQVR4nNXd+V/cxhkHYAl2XZC7LIQFhzY2iN3ibHdJCIfBmJi0jZuQ+szhuHESu01st47dxnHz/3ck7UpzvJLm+A6s359a8jHSwxzvvKMrCL3HYH3Y7Wz2D2IWQRLJ/+j1Nzvd4frA/+EDn7980O0cxEHUakUsAjGSH7H/EMT9Tter05dw0O3HKS2oixQa970xfQgH3YNAbbQ6ZxQceFHChaztWmY4jtlibYk+Iayw24useWNk1MMigcKE56QbBxaJEq73AwxvhAz666Azwwg79mOvLNiYxDQkQDjYNJw3tZHRJmBydRauH3jyZcYD587qKFzvwbunZGz1HI1OQubzysvC0eggPB2fs9Fe2D8tX2rsn7qwE/gdf3JEQedUhcP4dH1JtOLh6QlPtYNyRquuaiHsnnIHLSIKLJY55sKDs2nALFoH3oXDM2vALKLAdDQaCjfPsgGzaG16FA7OYApVI4qN1uMmwu5Z2/IwmXAMhBPQQ8dh0lP1hfHkAJOVKlw4GUOwCP3BqCkcnrWICM20oSfsTlIPHUdLb77REnYmEciIWuWGjnBCgZpEDSEyS0TEVSiH0Mka9UIgsBVvdj+9dgKcljWItUIcsBUnuy3nm82VqzhjPbFOiBuDo3NhQmY8wRHrxmKNEAeMRgV6KjxNYrUQmAfjkBc2V45hv7kmL1YKgcDWeMdzJGxe/S3ud1cSq4TrwDkv70pj4coSjhhVbRhXCAewMyj6aCFsrnyFIwYVy/AKYYw7gVbxR86FzatTOGJcqqgQ9nB9NOKSViFcWcIRo/J6sVSIXKvxf+FC2FxZxRHLM3+ZEFkvtfhKjhOyfgoklk2oJcIBcHkcCbu4vHDlEEiMSmabEiFwlgki4TfzwmZzCkiMTYR9ZBOKqypRuAQkRvSFG1I4hJa84u8WhUkjwogtcueGFIKOmB1WmgEk4TUkkcYQPwNmQnV0SEKWMXDEiLoyRQihG2vKJC4Js0ZEEamUQQgxBxuF3ISKMGtEWEfVER4g+2ik/FFl4agRQUSinypC7Dyq/gEVYXMKSVTnU+UUIMcZR6SuFhXhymdQogqS/n8HegGGWEmpbTg3hSRG8raNLEQcpAiiplGFyeoU2YrVQuRyjV5kqMKkxAAS5cWbKFwHX6FQgZSwOQUltsShIZ5ED3CAIoh5hhTmcw2IKI4NQQhuwha1BUa1YdFNIUTxuIIQ24RBTABJ4WhdAyMKjcgLwcme7KSksMl1UwRRmOF4IbgJyU5KC/luiiDyjcgJ0RMpvX1ACptTWCL/x+VOA9yEJZsKpLBI+iAi14iFELm9loRaVlS04bUpLJFbLhbCTbCwRe/u0cK5KSyRm+UKIfqep5gElgiFfAEhqkJsUVE6DMuEh7LQkViUGLkQuQecHqJkl/383NwcQVxShI7EvAuNhfBUQS/Z/nbzzq3rtwnjVVXoRsyPPxZiy6YkFN6Hd+7v7e29tbu7e3T3uoxUphpXYj5KxicCB8ay797e3iyLt2ZYHO1+fl0kqlONM1EUwm8+lCeaOylvLEyMd4VmJKYaR+J473QkBK9n5O2Swb0xcCxkxs9v80RiqnEk9gQhvJMKu8+D+7OzinDmaIYnyqsad2LEC/F3yApT6b1ZSshakRNSk6kbcfRHDvx00qBFjUFJOHN0tyCSk6kbsccJPdylzs2iPFAQzuwWM+pKqdCaGBVCD7dxc8nii9lS4dGXhZBMF07ErJumQny65wo0sQlF4czug1z4VbnQkphlrFSIXpOyKK4B3akSFiOxUmhJjMfCAb6Tcgn//myFcGYmF9Ip34mYlqiJEF04BbxwsFcp3B3nxBqhFTFddgRecgVXY39YI8xn08+qhVbE3kgI9/GLtpvVwqNbY2HJss2NmAnRW1BJ+BBaEJMNKSbsvilCc2Ky0RB4yYacUHscagiNicmEF3jJhpxQdy7VEhoT41To49FJrjzUzId6QlNilAjhe1CSsHpN87Wh0JDIirjAy0TDCzXXpbpCMyKbagL4br4s1KwttIVGRLbyCHysaEShXn2oLzQi9pjQx1QqbkRp1fgGQhNizIQ+gNJW2709Uijs05gITYhh4GPNptx7dX+PEB7NNG2F+sRoEHhJFsrdZeR+aVMII6E2sbUeeEkW6v1zdXvepkJdYtQ9LWF4/gvhusWXD+TrT4ZCTSITeijwSSEz5teeZr5WfOZCPWLUCXxUFrSQxeDDm9dvPbhNXiQ1FmoRo37Q9wEsE4bpNWBVZyfUIvYDL0uaKiHtsxLqEHuBlyXNaQk1iPEbLqwnvvHCWuKbL6wj+vGdqhD4RPikCs+G2P7UWPj3xTeJ2N66ZCqc++byG0Rsbz00F15c+8AP0cNc097ambcQLnghxh6EDDhtJWz4IHoQJkBLoQ8iXpgCbYUeiDG6tsiA1kI8sRcc+ADaC+HEPrbGHwMdhGAiq/GR+zQ50EWIJUYd5F5bAawUztGRC6FE6G5i+9scWCVcoaNZCBtr38GITAjb824/L4DT07/7TUn8fr4k3mkUsfY9ithax123ON6Y1hJOlwQvbGw/shaKxGgAu/bUfrwMFF75h30jikTY9cP2BaEJXYWNbYdaiifGsGvAhzvi+boKG2sO/ZQj9lDX8dt/XRbP11l45Z8OjZgT0+v4iHQhzqMQodN8mhPTezEQ6UJpQoDQrRFHxPR+GsQ9UfIoRAjdRuKIGIHua2v/MO9BuPC2UyOmxBh0b2Kkni9A2Gi4CRlxdG+i+1SztKGcL0LoNtckxNH9pc7rtvYFpZNChK7dlBEHmPu8pQUbTOi0dMsiBN2rrzYhZhwuuAKPQ8zzFofqMMQIXSqMNE5CyDMz7efehD86dtNhCHnuqf2tr1667VDrpxGOhW4Zsb3lbRy6lFBT2TBEPH9IJQuQ0DFddHKh29J0coWDQuiULyZWmHZSxLPcEys84YRO3XRihQNe6NJNDYXLJQEXZp0U8V4MSmi+573C7XljhB1B6NJNDYX11y1AwoEodEj6psK6a08g4aiTIt4xNKHCriR0WJtOpnB1fEDAu74mU3iiCO3nmskU5u/DA7xzbyKFh/kBAe9NnEhh8QZTwLsvJ1F4XBwQ8P7SSRRyb6kCvIPWUEitZ9BCrgkR7xGmhDtb/ZOTk0tcvDeO90dxkYslFltrOGG3RGjZiIRw5w/JqT16yN1qceOPYuwvFJFu3y9eVoi2Qr4JRaFdI6rCDLj4I7/LuH9OjP13C0m2a7j4gUy0FXZLhXaNqAg3UiA74/kK4TlOONpTU1rRUig0IeK9+rIwa0F2wsJVRRkoCJ+M/oVEtBQOK4RWRZQkHLUgO1/h0rci5CT5JRiJaCc8DKuENtehROG4BdnpPp2uEn7ECZ/l/0Yg2gkH1UKLj8cKwrwFWfBN+KcqIXcJRiBaCU/CaqFFI/LCHQ74aENbyN2UwBOthApI/oF5xuCEfAuKyUIV/ptvQ+4SDEe0ESovaAZ876kQ8i0oJQtV+Gd+wPH3zBZEC+Gx4gF8sysX8i0oJ4u/qEIiXUhEC6H6InjAd9fGQhEoJQtV+AknlO5/GhPNhcRDgYBv542EOyJwavGdaW1hY1v6txnRWKj2Ucj3DzOh1ILsLIU7wT6pFq5Jp5oRjYXUxwoA37BMhXILSsli+mNF+LHQht9TRFMh+aJ7wHdIE6HSglKyIIQ3BKFyT0JCNBTSXz0GfEuWCdUWlJJFnZC4Ys+IZsJVmgL4HnD7wkMVKCWL6Rs1wifEb7i8ZiQs+cB6idAkZbR/oE5ETBZqeSgKyRu8Ft/+l4HQ8JvORt/lPqTOQ6wsCOG+IHxGnfSiwT1R1EdWq4UmWZF8UfVyjZAvENlUo28hg8qEdUKT2YYgislCLQ8loeMtzyWzTI1woC9UiVKyqBU63sJW8tXxGmE4NJhQZaKULGqFbjd4kZ+r1hAarcEl4uITQagWT2IJTKYL7Sh9CUet0GhPQyRKyYIS8iWw0/3AJd9d0hLaE6VkUStsLFgL5Y0ZM6FJWhSJ4jBUiyexyHdIF6WJUFNoS5SSBSl8VxBapgt6uW0itCPKyUJDaJcuaoEaQquxKCcLSiiUwJbpoh6oI7QhSpUFUTwpQpt0UTPJaAst8qKULEihUORbPYynA9QTGj0alRKlZKEhbJDVRWWU1Us2wnBdX5gRpUuKagEsFYjqZhQIqCsMB7FRMSUlC1K4LwnN0sVqxWLbSsiKKf3BuConC6o8lIVm6aK8HrQXmiTGVSlZ6AiN0oVGlrAQGsw3ymOzBFAqn4zSRWUx4SDUH4zKs90aQv3qYrVkVw0gDMO+Xk9tS8mCFn4kEnUf+z2sP00HYTgMtJpR6qRU8aQIF/QmU80kYS0MwwONZpSfudQSaqWLY90k4SAMu7XNqDxzSQvFElgrXZhMMfbC+tGoPJFIC8USWCNdmDegrTAcVqd/JVlQxZNcINanC9MR6CJkFVVVV1WShZawprqo3m/CCyu7avupllAsEKvThVUHdRSG671So/xwt3qNmxKWVxfHVVu+/oTlRuVlLlR5qBSI6qXuUazaDUCEkE05lFF9QJ8W3pCFZLpw8zkLE2Mkzznq4+t6QipdHDv6AEK2Hu9LRvWFPFQBTAiVS76HDuMPKGTRiVscUn1rFC2UCkSlujixnj/5wAjZpNOP8hGpJAuyAFaFjWeLyO45CpSQRTcfkcrramjhOVmYVxfHm5DmSwMoDFNkK4rUt7nQQEWYVRdIXogWsuj2g+cP5UbUE15Z+27xsAPlhR6ELM5f+ml6Y355uVbI67a3rzy+eN7D2fgQJvHi5X+e7mzMz6dMungalcBXFra3txv/ffnC05n4Eqbx4uWln54ub2z8nDzoJPPYj35mtmePv/GGS8OrMIsXL16998vr1//7dZ9Flib2b/z6+vUv77965dWWxf8BQc5y/baJt4oAAAAASUVORK5CYII='} />
                                <span className="d-block mt-2">A Startup</span>
                            </div>
                        </div>                        
                    </div> : null }
                    {this.state.step === 2 && this.state.user === 2 ? <div>
                        <div className="form-group mb-3">
                            <label for="name">Company Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Eg. Finder" value={this.state.name} onChange={this.handleNameChange} />
                        </div>
                        <div className="form-group">
                            <label for="email">Email address:</label>
                            <input type="email" className="form-control" id="email" placeholder="Eg. yourname@example.com" value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                        <div className="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" className="form-control" id="pwd" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                        </div>
                        <div className="form-group">
                            <label for="entity">Registered Entity: </label>
                            <select className="form-control custom-select" value={this.state.entity} onChange={this.handleEntityChange}>
                                <option>Not Yet Registered</option>
                                <option>Propritership</option>
                                <option>Partnership</option>
                                <option>Pvt. Ltd.</option>
                                <option>LLP</option>
                                <option>OPC</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="regDate">Registeration/Inception Date: </label>
                            <input type="date" className="form-control" id="regDate" placeholder="Registration Date" value={this.state.regDate} onChange={this.handleRegDateChange} />
                        </div>
                        <div className="form-group">
                            <label for="regDate">Location: </label>
                            <input type="text" className="form-control" id="location" placeholder="Eg. Jaipur" value={this.state.location} onChange={this.handleLocationChange} />
                        </div>
                        
                        <div className="text-right w-100">
                         <button className="btn btn-primary" onClick={this.nextStep}>Next</button>
                        </div>
                    </div> : null }
                    {this.state.step === 3 && this.state.user === 2 ? 
                        <div>
                            <div className="form-group mb-3">
                                <label for="headline">Describe your startup idea in 240 characters: </label>
                                <input type="text" className="form-control" id="headline" placeholder="Headline" maxLength="240" value={this.state.headline} onChange={this.handleHeadlineChange} />
                                <small>This is the first thing investors will see, so make sure you pitch your idea well here.</small>
                            </div>
                            <div className="form-group">
                                <label>Stage: </label>
                                <select className="form-control custom-select" value={this.state.stage} onChange={this.handleStageChange}>
                                    <option>Ideation</option>
                                    <option>Documentation</option>
                                    <option>Prototype</option>
                                    <option>Pilot Launch</option>
                                    <option>Early Traction</option>
                                    <option>Traction</option>
                                </select>
                            </div>
                            {this.state.stage === "Traction" || this.state.stage === "Early Traction" ? 
                                <div className="form-group mb-3">
                                    <label for="users">Number of Users </label>
                                    <input type="number" className="form-control" id="headline" placeholder="Enter a Number" value={this.state.users} onChange={this.handleUsersChange} />
                                </div>
                             : null}
                            <div className="form-group">
                                <label>Business Model: </label>
                                <select className="form-control custom-select" value={this.state.businessModel} onChange={this.handleBusinessModelChange}>
                                    <option>B2C</option>
                                    <option>B2B</option>
                                    <option>B2B2C</option>
                                </select>
                            </div>
                            <div className="text-right w-100">
                                <button className="btn btn-primary" onClick={this.nextStep}>Next</button>
                            </div>
                        </div>
                    : null}
                    {this.state.step === 4 && this.state.user === 2 ? 
                        <div>
                            <p className="font-weight-bold">Present Finances</p>
                            <hr />
                            <div className="form-group mb-3">
                                <label for="name">Monthly Burn:</label>
                                <input type="number" className="form-control" id="burn" placeholder="Eg. 2000" value={this.state.burn} onChange={this.handleBurnChange} />
                            </div>
                            <div className="form-group">
                                <label for="email">Monthly Revenue:</label>
                                <input type="email" className="form-control" id="revenue" placeholder="Eg. 2000" value={this.state.revenue} onChange={this.handleRevenueChange} />
                            </div>
                            <p className="font-weight-bold">Financial Projections</p>
                            <hr />
                            <div className="row">
                                <div className="col-3 border-left font-weight-bold">
                                    <p>1st  Year</p>
                                </div>
                                <div className="col-9">
                                    <div className="form-group mb-3">
                                        <label>Total Expenses: </label>
                                        <input type="number" className="form-control" id="expense1" placeholder="Eg. 20000" value={this.state.year1.expense} onChange={this.handleExpense1Change} />
                                    </div>
                                    <div className="form-group">
                                        <label>Total Revenue: </label>
                                        <input type="number" className="form-control" id="revenue1" placeholder="Eg. 20000" value={this.state.year1.revenue} onChange={this.handleRevenue1Change} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 border-left font-weight-bold">
                                    <p>3rd  Year</p>
                                </div>
                                <div className="col-9">
                                    <div className="form-group mb-3">
                                        <label>Total Expenses: </label>
                                        <input type="number" className="form-control" id="expense3" placeholder="Eg. 20000" value={this.state.year3.expense} onChange={this.handleExpense3Change} />
                                    </div>
                                    <div className="form-group">
                                        <label>Total Revenue: </label>
                                        <input type="number" className="form-control" id="revenue3" placeholder="Eg. 20000" value={this.state.year3.revenue} onChange={this.handleRevenu3Change} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 border-left font-weight-bold">
                                    <p>5th  Year</p>
                                </div>
                                <div className="col-9">
                                    <div className="form-group mb-3">
                                        <label for="name">Total Expenses: </label>
                                        <input type="number" className="form-control" id="expense5" placeholder="Eg. 20000" value={this.state.year5.expense} onChange={this.handleExpense5Change} />
                                    </div>
                                    <div className="form-group">
                                        <label>Total Revenue: </label>
                                        <input type="number" className="form-control" id="revenue5" placeholder="Eg. 20000" value={this.state.year5.revenue} onChange={this.handleRevenue5Change} />
                                    </div>
                                </div>
                            </div>
                            <div className="text-right w-100">
                            <button className="btn btn-primary" onClick={this.nextStep}>Next</button>
                            </div>
                        </div>
                    : null}
                    {this.state.step === 5 && this.state.user === 2 ?  
                        <div>
                           <p className="font-weight-bold">Present Finances</p>
                           <hr />
                           <div className="form-group mb-3">
                               <label for="name">Monthly Burn:</label>
                               <input type="number" className="form-control" id="burn" placeholder="Eg. 2000" value={this.state.burn} onChange={this.handleBurnChange} />
                           </div>
                           <div className="form-group">
                               <label for="email">Monthly Revenue:</label>
                               <input type="email" className="form-control" id="revenue" placeholder="Eg. 2000" value={this.state.revenue} onChange={this.handleRevenueChange} />
                           </div>
                           <p className="font-weight-bold">Financial Projections</p>
                           <hr />
                           <div className="row">
                               <div className="col-3 border-left font-weight-bold">
                                   <p>1st  Year</p>
                               </div>
                               <div className="col-9">
                                   <div className="form-group mb-3">
                                       <label>Total Expenses: </label>
                                       <input type="number" className="form-control" id="expense1" placeholder="Eg. 20000" value={this.state.year1.expense} onChange={this.handleExpense1Change} />
                                   </div>
                                   <div className="form-group">
                                       <label>Total Revenue: </label>
                                       <input type="number" className="form-control" id="revenue1" placeholder="Eg. 20000" value={this.state.year1.revenue} onChange={this.handleRevenue1Change} />
                                   </div>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-3 border-left font-weight-bold">
                                   <p>3rd  Year</p>
                               </div>
                               <div className="col-9">
                                   <div className="form-group mb-3">
                                       <label>Total Expenses: </label>
                                       <input type="number" className="form-control" id="expense3" placeholder="Eg. 20000" value={this.state.year3.expense} onChange={this.handleExpense3Change} />
                                   </div>
                                   <div className="form-group">
                                       <label>Total Revenue: </label>
                                       <input type="number" className="form-control" id="revenue3" placeholder="Eg. 20000" value={this.state.year3.revenue} onChange={this.handleRevenu3Change} />
                                   </div>
                               </div>
                           </div>
                           <div className="row">
                               <div className="col-3 border-left font-weight-bold">
                                   <p>5th  Year</p>
                               </div>
                               <div className="col-9">
                                   <div className="form-group mb-3">
                                       <label for="name">Total Expenses: </label>
                                       <input type="number" className="form-control" id="expense5" placeholder="Eg. 20000" value={this.state.year5.expense} onChange={this.handleExpense5Change} />
                                   </div>
                                   <div className="form-group">
                                       <label>Total Revenue: </label>
                                       <input type="number" className="form-control" id="revenue5" placeholder="Eg. 20000" value={this.state.year5.revenue} onChange={this.handleRevenue5Change} />
                                   </div>
                               </div>
                           </div>
                           <div className="text-right w-100">
                           <button className="btn btn-primary" onClick={this.nextStep}>Next</button>
                           </div>
                       </div>
                    : null}
                    
                </form>
                <p className="mt-5">Already have an account? <span className="text-primary" onClick={this.props.login}>Login</span></p>
            </div>
        );
    }
}

export default Signup;