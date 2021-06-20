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

    @Autowired
    private SizeService sizeService;

    public List<Delivery> findAll(){
        return deliveryRepository.findAll();
    }

    public Delivery newDelivery(DeliveryDTO deliveryDTO){
        Client client = clientService.findByName(deliveryDTO.getClient());
        Staff staff = staffService.findByName(deliveryDTO.getLivreur());
        Vehicule vehicule = vehiculeService.findByName(deliveryDTO.getVehicule());
        Pizza pizza  = pizzaService.findByName(deliveryDTO.getPizza());
        Size size = sizeService.findByName(deliveryDTO.getSize());
        Delivery delivery = new Delivery(staff, client, vehicule, deliveryDTO.isRetard(), pizza, size);
        return deliveryRepository.save(delivery);
    }

    public Delivery findByID(Long id){
        return deliveryRepository.findById(id).orElseThrow();
    }

    public void deleteDelivery(Long id){
        deliveryRepository.delete(findByID(id));
    }

    public void setLate(Long id, boolean isLate){
        deliveryRepository.setDeliveryLate(id,isLate);
    }
}
