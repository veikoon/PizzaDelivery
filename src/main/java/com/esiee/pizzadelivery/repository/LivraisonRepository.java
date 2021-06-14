package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Livraison;
import com.esiee.pizzadelivery.model.Taille;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LivraisonRepository extends CrudRepository<Livraison, Long> {
    List<Livraison> findAll();
}
