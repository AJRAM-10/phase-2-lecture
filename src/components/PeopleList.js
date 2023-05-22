// Don't have to do this in most recent versions of react
import React from 'react'
import Person from './Person'

const PeopleList = ({ people }) => {

    const peopleCards = people.map(person => (
        <Person 
            name={person.name} 
            location={person.location} 
            key={person.name} 
        />
    ))

    return (
        <div className="people-list">
            {peopleCards}
        </div>
    )
}

export default PeopleList;
