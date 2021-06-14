package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Delivery;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeliveryRepository extends CrudRepository<Delivery, Long> {
    List<Delivery> findAll();
}
