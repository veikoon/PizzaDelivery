package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Livraison;
import com.esiee.pizzadelivery.model.Pizza;
import com.esiee.pizzadelivery.model.Taille;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TailleRepository extends CrudRepository<Taille, Long> {
    public Taille findByName(String name);
    public Long deleteByName(String name);
    List<Taille> findAll();
}
