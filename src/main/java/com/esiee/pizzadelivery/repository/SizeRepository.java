package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Size;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SizeRepository extends CrudRepository<Size, Long> {
    public Size findByName(String name);
    public Long deleteByName(String name);
    List<Size> findAll();
}
