package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Client;
import com.esiee.pizzadelivery.model.Vehicule;
import com.esiee.pizzadelivery.repository.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiculeService {

    @Autowired
    private VehiculeRepository vehiculeRepository;

    public Vehicule newVehicule(Vehicule vehicule){
        vehiculeRepository.save(vehicule);
        return vehicule;
    }

    public void deleteVehicule(String name){
        vehiculeRepository.deleteByName(name);
    }

    public Vehicule findByName(String name){
        return vehiculeRepository.findByName(name);
    }

    public List<Vehicule> findAll(){
        return vehiculeRepository.findAll();
    }
}
