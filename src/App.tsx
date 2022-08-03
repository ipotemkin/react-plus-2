import './App.css'
import { Picture } from './components/Picture/Picture'
import { Form } from './components/Form/Form'

// import imagePlaceholder from './components/Picture/assets/logo512.png'
import targetImage from './components/Picture/assets/aleksandra-sapozhnikova-BthSqlD2Cso-unsplash.jpg'
import { Menu, MenuItem } from './components/Menu/Menu'
import { Filter } from './components/Filter/Filter'
import { htmlTags } from './html-tags'

const menu: MenuItem[] = [
  { id: 1, name: 'line 1' },
  { id: 2, name: 'line 2' },
  { id: 3, name: 'line 3' },  
  { id: 4, name: 'line 4' },  
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Podojdi, podojdi…</h2>
        <Picture
          // placeholder={imagePlaceholder}
          source={targetImage}
        />

        <h2>Фабрика onChange</h2>
        <Form />

        <h2>Выпадающее меню</h2>
        <Menu menu={menu}/>

        <h2>Фильтр</h2>
        <Filter data={htmlTags}/>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </header>
    </div>
  )
}

export default App
