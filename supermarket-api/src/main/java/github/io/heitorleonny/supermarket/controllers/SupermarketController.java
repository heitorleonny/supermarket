package github.io.heitorleonny.supermarket.controllers;

import github.io.heitorleonny.supermarket.models.Product;
import github.io.heitorleonny.supermarket.services.SupermarketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/supermarket/api/v1/product")
public class SupermarketController {

    @Autowired
    SupermarketService supermarketService;

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> saveProduct(
            @RequestBody Product product
    ){
      supermarketService.saveProduct(product);
      return ResponseEntity.ok(HttpStatus.OK);

    }

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Product> findAllProducts(){
        return supermarketService.findAllProducts();
    }

    @CrossOrigin
    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Optional<Product> findProductById(
            @PathVariable("id") Long id
    ){
        return supermarketService.findProductById(id);
    }
}
