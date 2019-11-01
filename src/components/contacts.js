import React from 'react'

const Contacts = ({ contacts }) => {
    console.log('contacts: ', contacts)
    return (
    <div>
        {contacts.map((contact) => (
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{contact.jobId} {contact.branch}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{contact.wagePerHourInCents}</h6>
            <p className="card-text">{contact.milesToTravel}</p>
            </div>
        </div>
        ))}
    </div>
    )
};

export default Contacts