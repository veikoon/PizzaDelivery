package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Ingredient;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, Long> {
    public Ingredient findByName(String name);
    public Long deleteByName(String name);
    List<Ingredient> findAll();
}
