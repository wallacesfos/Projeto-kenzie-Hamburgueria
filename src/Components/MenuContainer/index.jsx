import Produtos from '../Product'

export default function MenuContainer(props){
    const {products, handleClick} = props;
    return(
        products.map((item) => {
            return <Produtos itens={item} handleClick={handleClick}/>
        })
    )
}