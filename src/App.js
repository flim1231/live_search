import {useState, useEffect} from 'react'
import DATA from './data.json';
import './App.css'
import Card from './Components/Card';
const data = DATA;




const App = () => {

  const [search, setSearch] = useState('');
  const [listData, setListData] = useState(data);
  const [bol,setBol] = useState(false)

  const carFilter = (sear, dat) => {
    return dat.filter(({car_model}) =>
      car_model.toLowerCase().includes(sear.toLowerCase())
    )
  }

  const chanInput = (e) => {
    setSearch(e.target.value)
    e.target.value ? setBol(true) : setBol(false)
  }
  

  useEffect(() => {
    const Deoib = setTimeout(() =>{
      const uk = carFilter(search, data)
      setListData(uk)
    },0)
    return() => clearInterval(Deoib)
  }, [search])

  return (
    <div className='App'>
        <Card listData={listData} chanInput={chanInput} bol={bol}/>
    </div>
  )
}


export default App;