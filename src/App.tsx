import Style from  './App.module.scss'
import Form from './components/Form'
import List from './components/List'

function App() {
  return (
    <div className={Style.AppStyle}>
      <Form></Form>
      <List></List>
    </div>
)
}

export default App
