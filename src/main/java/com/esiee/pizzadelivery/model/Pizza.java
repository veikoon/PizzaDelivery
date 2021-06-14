package com.esiee.pizzadelivery.model;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Pizza")
public class Pizza {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "size", nullable = false)
    private Size size;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "ingredients", nullable = false)
    private List<Ingredient> ingredients;

    public Pizza(String name, Size size, List<Ingredient> ingredients) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Size getTaille() {
        return size;
    }

    public void setTaille(Size size) {
        this.size = size;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }
}
