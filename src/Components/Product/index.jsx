import cart from './cart.png'

export default function Produtos(props){
    const {itens:{id, name, category,price, image}, handleClick} = props
    const img = 'https://image.flaticon.com/icons/png/512/57/57451.png'
    return(
        <div className="card">
            <h2 className="card-title">{name}</h2>
            <img src={image} className="imagem-product" alt="img"/>
            <p>Categoria: {category}</p>
            <h4>Preço: R${price}</h4>
            <button className="inpute-button" onClick={() => handleClick(props.itens)}><img src={cart} alt="img" className="image-button"/>Adicionar ao Carrinho</button>
        </div>
    )
}