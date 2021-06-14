package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Client;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends CrudRepository<Client, Long> {
    public Client findByName(String name);
    public Long deleteByName(String name);
    List<Client> findAll();
}
