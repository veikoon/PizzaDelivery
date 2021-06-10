package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Pizza;
import com.esiee.pizzadelivery.model.Taille;
import com.esiee.pizzadelivery.repository.PizzaRepository;
import com.esiee.pizzadelivery.repository.TailleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private PizzaRepository pizzaRepository;

    @Autowired
    private TailleRepository tailleRepository;

    public Pizza newPizza(Pizza pizza){
        pizzaRepository.save(pizza);
        return pizza;
    }

    public void deletePizza(String name){
        pizzaRepository.deleteByName(name);
    }

    public Pizza findByName(String name){
        return pizzaRepository.findByName(name)
                .orElseThrow(() -> new UsernameNotFoundException("Pizza Not Found with name: " + name));
    }

    public Taille newTaille(Taille taille){
        tailleRepository.save(taille);
        return taille;
    }

    public void deleteTaille(String name){
        tailleRepository.deleteByName(name);
    }
}
