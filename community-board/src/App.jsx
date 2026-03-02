import './App.css'
import Card from './components/Card'
import { classes } from './data'

function App() {
  return (
    <div className="app">
      <h1 className="title">Weekly Fitness Class Schedule</h1>

      <div className="cards-container">
        {classes.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            instructor={item.instructor}
            time={item.time}
            level={item.level}
            link={item.link}
            image={item.image}   
          />
        ))}
      </div>
    </div>
  )
}

export default App
