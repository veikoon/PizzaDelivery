package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Pizza;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PizzaRepository extends CrudRepository<Pizza, Long> {
    public Optional<Pizza> findByName(String name);
    public Long deleteByName(String name);
}
