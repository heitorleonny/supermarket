import { useEffect, useState } from 'react';
import './styles.css'
import ProductList from '../../Components/ProductList';
import  arroz  from  '../../assets/arroz.png'
function App() {
  const [inputValue, setInputValue] = useState("");
  const [product, setProduct] = useState("");
  const [currentProduct, setCurrentProduct] = useState({});

 
  const handleGetProduct = async () => {
    try {
      const response = await fetch(`http://localhost:8080/supermarket/api/v1/product/${product}`);
      
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`); 
      }
  
      const newProduct = await response.json();
  
      if (newProduct.name) {
        setCurrentProduct({
          name: newProduct.name,
          description: newProduct.description,
          price: newProduct.price,
          imageUrl: newProduct.imageUrl
        });
      } else {
        // Trate o caso em que o produto não tem nome ou não foi encontrado
        console.error("Produto não encontrado");
        // Aqui você pode definir o estado para mostrar uma mensagem de erro ao usuário
      }
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      // Aqui você pode definir o estado para mostrar uma mensagem de erro ao usuário
    }
  }
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleButtonClick = () => {
    setProduct(inputValue);
  }

  useEffect(() => {
    handleGetProduct();
  }, [product]); 
  

  return (
    <div className="App">
      <header>
      <h1>Supermarket</h1>
      <main>
        {currentProduct.name? (
          <>
          <ProductList productImage = {currentProduct.imageUrl? currentProduct.imageUrl : "https://th.bing.com/th/id/OIP.Jq9lCJGYork6g8NFfGH8cQAAAA?rs=1&pid=ImgDetMain"} productTitle={currentProduct.name} productDescription={currentProduct.description} productPrice={currentProduct.price}></ProductList>
          </>
        ) : null
        }
        <div className='input-id'>
        <input value={inputValue} onChange={handleInputChange}></input>
        <button onClick={handleButtonClick}>Pesquisar</button>

        </div>
        
      </main>
      </header>
    </div>
  );
        }

export default App;
