package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Ingredient;
import com.esiee.pizzadelivery.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {

    @Autowired
    private IngredientRepository ingredientRepository;

    public Ingredient newIngredient(Ingredient ingredient){
        ingredientRepository.save(ingredient);
        return ingredient;
    }

    public List<Ingredient> findAll(){
        return ingredientRepository.findAll();
    }

    public Ingredient findByName(String name){
        return ingredientRepository.findByName(name);
    }
}
