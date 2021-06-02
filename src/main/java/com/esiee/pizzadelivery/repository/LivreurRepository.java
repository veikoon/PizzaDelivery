package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Livreur;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivreurRepository extends CrudRepository<Livreur, Long> {
}
