import './App.css';
import MenuContainer from './Components/MenuContainer'
import React, {useState} from 'react'

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99, image: 'https://exame.com/wp-content/uploads/2020/05/Vinil-Burger.jpg?quality=70&strip=info&resize=680,453' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99, image: 'https://lh3.googleusercontent.com/proxy/vIjmQ8gtIRU5akCabXRDDl_lb1oEBd2ppjiZ0EmV8u_Um2B7o2LhovFqWNppgTVlR8ASYk3ttlgW0gSiDiRYub4IbdglazKlz6ujHgimSvlTDZDYYg-mfGXBIladCZ6hFunyBByZ-A'},
    { id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99, image: 'https://d37k6lxrz24y4c.cloudfront.net/v2/pt-br/e9dc924f238fa6cc29465942875fe8f0/67a3c220-148a-491e-9cb7-104de5a62763-600.jpg'},
    { id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99, image: 'https://diaonline.ig.com.br/wp-content/uploads/2018/11/15-pit-dogs-em-goiania-que-voce-precisa-conhecer.jpg'},
    { id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjB_OWUthl45tGF0SGaIHR5oD8qhuIv3PENQ&usqp=CAU'},
    { id: 6, name: 'Coca', category: 'Bebidas', price: 4.99, image: 'https://www.coca-cola.com.br/images/offers/ofertas-imperdiveis-paodeacucar-1.jpg'},
    { id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99, image: 'https://img.riomarevoce.com/shoppingjardinsonline/2020/06/refrigerante_fanta_laranja_lata_350ml_bobs-1.jpg'},
  ]); 

  const [FiltroProdutos, setFiltroProdutos] = useState(products);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)


const showProducts = (params) =>{
  let arr = []
  if(params.length === 0){
    setFiltroProdutos(products)
  }else{
    products.map((item) => {
      if(item.name.toLocaleLowerCase().includes(params.toLocaleLowerCase())){
        arr.push(item)
      }
    })
    setFiltroProdutos(arr)
  }
}

function handleClick(id){
  if(currentSale.includes(id) === false){
    setCurrentSale([...currentSale, id])
    setCartTotal(cartTotal + id.price)
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://kenzie.com.br/images/logoblue.svg" alt="logo" className="logo"/>
        <div className="inpute">
          <input type="text" placeholder="Pesquisar" onChange={(e) => showProducts(e.target.value)}/>
        </div>
      </header>
      <main className="App-main">
          <MenuContainer products={FiltroProdutos} handleClick={handleClick}/>
      </main>
      <h2>Preço Total: {cartTotal.toFixed(2)}</h2>
      <div className="carrinho">
        {currentSale.map((item) => {
          return(
            <div className="Card">
              <h2 className="card-title">{item.name}</h2>
              <img src={item.image} className="Imagem-product" alt="img"/>
              <p>Categoria: {item.category}</p>
              <h4>Preço: R${item.price}</h4>
            </div>
          )
        })}
      </div>

    </div>
  );
}

export default App;
