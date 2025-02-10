import Style from  './App.module.scss'
import Chronometer from './components/Chronometer'
import Form from './components/Form'
import List from './components/List'

function App() {
  return (
    <div className={Style.AppStyle}>
      <Form />
      <List />
      <Chronometer />
    </div>
)
}

export default App
