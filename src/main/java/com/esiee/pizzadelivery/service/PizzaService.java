package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.DTO.PizzaDTO;
import com.esiee.pizzadelivery.model.Ingredient;
import com.esiee.pizzadelivery.model.Pizza;
import com.esiee.pizzadelivery.model.Size;
import com.esiee.pizzadelivery.repository.PizzaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PizzaService {

    @Autowired
    private PizzaRepository pizzaRepository;

    @Autowired
    private SizeService sizeService;

    @Autowired
    private IngredientService ingredientService;

    public void deletePizza(String name){
        pizzaRepository.deleteByName(name);
    }

    public Pizza findByName(String name){
        return pizzaRepository.findByName(name);
    }

    public List<Pizza> findAll(){
        return pizzaRepository.findAll();
    }

    public Pizza newPizza(PizzaDTO pizzaDTO){
        Size size = sizeService.findByName(pizzaDTO.getSize());
        List<Ingredient> ingredients = new ArrayList<Ingredient>();
        for (String ingredient: pizzaDTO.getIngredients()
             ) {
            ingredients.add(ingredientService.findByName(ingredient));
        }
        Pizza pizza = new Pizza(pizzaDTO.getName(), size, ingredients);
        return pizzaRepository.save(pizza);
    }

}
