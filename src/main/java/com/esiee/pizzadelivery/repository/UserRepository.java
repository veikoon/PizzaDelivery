package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Livraison;
import com.esiee.pizzadelivery.model.Livreur;
import com.esiee.pizzadelivery.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    public User findByName(String name);
    public Long deleteByName(String name);
    List<User> findAll();
}
