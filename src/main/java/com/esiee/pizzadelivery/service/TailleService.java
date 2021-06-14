package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Pizza;
import com.esiee.pizzadelivery.model.Taille;
import com.esiee.pizzadelivery.repository.PizzaRepository;
import com.esiee.pizzadelivery.repository.TailleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TailleService {

    @Autowired
    private TailleRepository tailleRepository;

    public Taille newTaille(Taille taille){
        tailleRepository.save(taille);
        return taille;
    }

    public void deleteTaille(String name){
        tailleRepository.deleteByName(name);
    }

    public Taille findByName(String name){
        return tailleRepository.findByName(name);
    }

    public List<Taille> findAll(){
        return tailleRepository.findAll();
    }
}
