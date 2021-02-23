import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Header1 = ({text}) => <div><h1>{text}</h1></div>

const Statistic = ({text, value}) => <><tr><td>{text}</td><td>{value}</td></tr></>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const Statistics = ({good, neutral, bad}) => {
  const total=good+neutral+bad

  if (total === 0) {
    return (
      <div>
      <Header1 text={'Statistics'} /> 
      No Feedback Given
      </div>
    )
  }
  return (
    <div>
      <Header1 text={'Statistics'} />
      <table><tbody>
      <Statistic text={'Good'} value={good} />
      <Statistic text={'Neutral'} value={neutral} />
      <Statistic text={'Bad'} value ={bad} />
      <Statistic text={'All'} value ={total}/>
      <Statistic text={'Average'} value ={((good-bad)/total)}/>
      <Statistic text={'Positive'} value ={(100*good/total)+' %'}/>
      </tbody></table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good+1)
  const handleNeutralClick = () => setNeutral(neutral+1)
  const handleBadClick = () => setBad(bad+1)

  return (
    <>
    <Header1 text={'Give Feedback'} />
    <Button onClick={handleGoodClick} text={'Good'}/>
    <Button onClick={handleNeutralClick} text={'Neutral'}/>
    <Button onClick={handleBadClick} text={'Bad'}/>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render( <App />,  document.getElementById('root'));