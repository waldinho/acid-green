import React, { Component } from 'react'

class Matches extends Component {
  
    state = {
        contact: []
      }
    
      componentDidMount() {
        fetch('http://test.swipejobs.com/api/worker/7f90df6e-b832-44e2-b624-3143d428001f/matches')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contact: data })
        })
      }
    
      render() {
          const  {
              contact,
          } = this.state
        return (
            <div>
            {contact.map((item) => (
                <div className="card">
                    <div className="card-body">
                        <img src={item.jobTitle.imageUrl}/>
                        <h5 className="card-title">{item.jobTitle.name}</h5>
                        <div className="green-strip">
                            <h6 className="card-subtitle mb-2 text-muted">{item.distanceToTravel}</h6><h6 className="card-subtitle mb-2 text-muted">{item.wagePerHourInCents}</h6>
                        </div>
                        {item.shifts.map((shiftItem) => (<p className="card-text">              {shiftItem.startDate}</p>))}
                        <p className="card-text">{item.company.address.formattedAddress}</p>
                        <p className="card-text">{item.company.reportTo.name} {item.company.reportTo.phone}</p>
                        <p className="card-text">{item.requirements}</p>
                    </div>
                </div>
                ))}
            </div>
            )
        }
    }
      
export default Matches