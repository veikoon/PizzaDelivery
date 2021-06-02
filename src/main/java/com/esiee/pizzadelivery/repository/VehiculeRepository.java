package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Vehicule;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehiculeRepository extends CrudRepository<Vehicule, Long> {
}
