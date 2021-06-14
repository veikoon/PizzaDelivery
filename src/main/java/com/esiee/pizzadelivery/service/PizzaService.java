package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Livreur;
import com.esiee.pizzadelivery.model.Pizza;
import com.esiee.pizzadelivery.model.Taille;
import com.esiee.pizzadelivery.repository.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PizzaService {

    @Autowired
    private PizzaRepository pizzaRepository;

    public Pizza newPizza(Pizza pizza){
        pizzaRepository.save(pizza);
        return pizza;
    }

    public void deletePizza(String name){
        pizzaRepository.deleteByName(name);
    }

    public Pizza findByName(String name){
        return pizzaRepository.findByName(name);
    }

    public List<Pizza> findAll(){
        return pizzaRepository.findAll();
    }
}
