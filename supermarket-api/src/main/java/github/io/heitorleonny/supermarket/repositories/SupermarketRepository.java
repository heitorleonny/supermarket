package github.io.heitorleonny.supermarket.repositories;

import github.io.heitorleonny.supermarket.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SupermarketRepository extends JpaRepository<Product, Long> {
}
