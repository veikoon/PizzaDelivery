package com.esiee.pizzadelivery.DTO;


import javax.persistence.*;
import java.util.List;

public class PizzaDTO {

    private String name;
    private List<String> ingredients;

    public PizzaDTO(){

    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }
}
