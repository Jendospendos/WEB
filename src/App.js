import React from "react"
import First from "./components/First"
import Header from "./components/Header"
import Main from "./components/main"
import {Home} from "./components/Home"
import Contacts from "./components/Contacts"
import ModalProfile from'./components/ModalProfile'
import Footer from "./components/footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"
import { Route, Routes, Link} from "react-router-dom"



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
    {title: "Обследование",  price: "2500", id: 1, img: "1.png", category:'Обследование', desc:"Аудит информационной системы персональных данных на соответствие требованиям российского законодательства"},
    { title: "Аудит информационной безопасности", price: "120", id: 2, img: "2.png", category:'Безопасность', desc:"Экспертная оценка соответствия стандартам и требованиям законодательства в области информационной безопасности"},
    { title: "Защита персональных данных", price: "500", id: 3, img: "3.png", category:'Безопасность', desc:"Построение систем защиты информационных систем персональных данных, аттестация ИСПДн. Подготовка к проверкам Роскомнадзора,ФСТЭК, ФСБ"},
    { title: "Обследование КИИ", price: "900", id: 4, img: "4.png", category:'Обследование', desc:"Анализ субъектов критической информационной инфраструктуры (КИИ) и присвоение им категорий"},
    { title: "Подготовка к получению лицензии ФСБ России", price: "300", id: 5, img: "5.png", category:'ФСБ', desc:"Консультации при лицензировании деятельности по разработке, распространению и обслуживанию средств шифрования, оценка готовности к лицензированию"},
    { title: "Подготовка к получению лицензии ФСТЭК России", price: "100", id: 6, img: "6.png", category:'ФСБ', desc:"Консультации при лицензировании деятельности по технической защите конфиденциальной информации, оценка готовности к лицензированию"}
      ],
      showFullItem: false,
      fullItem: {},
      
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
    
  }
  
  render() {

  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
       <Main />
        <Categories chooseCategory={this.chooseCategory} />
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
            <Routes>
      <Route path="/" element={<Home />} />
      <Route path="button" element={<First />} />
      <Route path="profile" element={<ModalProfile />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
        <Footer />
    </div>
  )
}


onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}

chooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
  
  
  console.log(category)
  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}
addToOrder(item) {
  let isInArray = false
this.state.orders.forEach(el => {
  if(el.id === item.id)
  isInArray = true
})
if(!isInArray)
  this.setState({orders: [...this.state.orders, item] }, () => {
  console.log(this.state.orders)
})
}
}

export default App;
