package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.ERole;
import com.esiee.pizzadelivery.model.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
    public Optional<Role> findByName(ERole login);
}
