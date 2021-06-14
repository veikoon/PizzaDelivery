package com.esiee.pizzadelivery.model;

import javax.persistence.*;

@Entity
@Table(name = "Vehicule")
public class Vehicule {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    public Vehicule() {
    }

    public Vehicule(String name) {
        this.name = name;
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
}
