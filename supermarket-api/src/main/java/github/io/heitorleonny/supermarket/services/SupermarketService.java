package github.io.heitorleonny.supermarket.services;

import github.io.heitorleonny.supermarket.models.Product;
import github.io.heitorleonny.supermarket.repositories.SupermarketRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class SupermarketService {
    @Autowired
    SupermarketRepository repository;

    Logger logger = Logger.getLogger(SupermarketService.class.getName());


    public void saveProduct(Product product){
        logger.info("save product");
        repository.save(product);
    }

    public List<Product> findAllProducts(){
        logger.info("return all products");
        return repository.findAll();
    }

    public Optional<Product> findProductById(Long id){
        logger.info("return product by id");
        return repository.findById(id);
    }
}
