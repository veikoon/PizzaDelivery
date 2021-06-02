package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Livraison;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivraisonRepository extends CrudRepository<Livraison, Long> {
}
