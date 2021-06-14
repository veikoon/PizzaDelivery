package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Client;
import com.esiee.pizzadelivery.model.Vehicule;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehiculeRepository extends CrudRepository<Vehicule, Long> {
    public Vehicule findByName(String name);
    public Long deleteByName(String name);
    List<Vehicule> findAll();
}
