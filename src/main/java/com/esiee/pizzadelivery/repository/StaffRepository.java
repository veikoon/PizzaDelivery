package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Staff;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StaffRepository extends CrudRepository<Staff, Long> {
    public Staff findByName(String name);
    public Long deleteByName(String name);
    List<Staff> findAll();
}
