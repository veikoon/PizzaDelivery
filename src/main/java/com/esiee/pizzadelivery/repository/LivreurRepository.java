package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Livraison;
import com.esiee.pizzadelivery.model.Livreur;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LivreurRepository extends CrudRepository<Livreur, Long> {
    public Livreur findByName(String name);
    public Long deleteByName(String name);
    List<Livreur> findAll();
}
