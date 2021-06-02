package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Taille;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TailleRepository extends CrudRepository<Taille, Long> {
}
