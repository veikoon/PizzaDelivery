package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.DTO.DeliveryDTO;
import com.esiee.pizzadelivery.model.*;
import com.esiee.pizzadelivery.repository.DeliveryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;

    @Autowired
    private ClientService clientService;

    @Autowired
    private StaffService staffService;

    @Autowired
    private VehiculeService vehiculeService;

    @Autowired
    private PizzaService pizzaService;

    public List<Delivery> findAll(){
        return deliveryRepository.findAll();
    }

    public Delivery newLivraison(DeliveryDTO deliveryDTO){
        Client client = clientService.findByName(deliveryDTO.getClient());
        Staff staff = staffService.findByName(deliveryDTO.getLivreur());
        Vehicule vehicule = vehiculeService.findByName(deliveryDTO.getVehicule());
        Pizza pizza  = pizzaService.findByName(deliveryDTO.getPizza());
        Delivery delivery = new Delivery(staff, client, vehicule, deliveryDTO.isRetard(), pizza);
        return deliveryRepository.save(delivery);
    }
}
