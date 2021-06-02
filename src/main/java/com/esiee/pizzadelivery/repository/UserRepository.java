package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    public Optional<User> findByLogin(String login);
    public List<User> findAll();
    public Boolean existsByLogin(String username);
}
