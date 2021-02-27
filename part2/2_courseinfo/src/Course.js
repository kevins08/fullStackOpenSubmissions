import React from 'react';

const Course = ({course}) => {
    return (
      <>
        <Header2 text={course.name} />
        <Content course={course} />
        <Total course={course} />
      </>
    )
  }
  
  const Header2 = ({text}) => <h2>{text}</h2>
  
  const Header3 = ({text}) => <h3>{text}</h3>
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((x) => <Part key={x.id} part={x} /> )}
      </div>
    )
  }
  
  const Part = ({part}) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
  }
  
  const Total = ({ course }) => {
    const totalAmount = course.parts.reduce( (sum, part) => sum+part.exercises, 0 )
    return(
      <Header3 text={'Number of exercises in this course: '+totalAmount}/>
    ) 
  }

export default Course