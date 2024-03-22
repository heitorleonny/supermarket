import './styles.css'


const ProductList = ({productImage, productTitle, productDescription, productPrice}) => {
    return (
        <div className='product-container'>
            <img src={productImage} alt='imagem do produto'></img>
            <div className='product-info'>
                <h2>{productTitle}</h2>
                <p>{productDescription}</p>
                <span>R${productPrice}</span>
            </div>
        </div>
    )
}

export default ProductList;