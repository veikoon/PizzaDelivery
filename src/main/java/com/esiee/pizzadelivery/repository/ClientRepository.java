package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Client;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface ClientRepository extends CrudRepository<Client, Long> {
    public Client findByName(String name);
    public Long deleteByName(String name);
    List<Client> findAll();

    @Transactional
    @Modifying
    @Query("UPDATE Client SET total_facturation = :newTotal WHERE name = :clientName")
    void setTotal(@Param("clientName") String name, @Param("newTotal") float total);

    @Transactional
    @Modifying
    @Query("UPDATE Client SET balance = :newBalance WHERE name = :clientName")
    void setBalance(@Param("clientName") String name, @Param("newBalance") float newBalance);
}
