package com.esiee.pizzadelivery.repository;

import com.esiee.pizzadelivery.model.Delivery;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface DeliveryRepository extends CrudRepository<Delivery, Long> {
    List<Delivery> findAll();

    @Transactional
    @Modifying
    @Query("UPDATE Delivery SET is_late = :islate WHERE id = :deliveryid")
    void setDeliveryLate(@Param("deliveryid") Long id, @Param("islate") boolean isLate);
}
