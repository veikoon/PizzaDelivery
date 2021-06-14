package com.esiee.pizzadelivery.model;

import javax.persistence.*;

@Entity
@Table(name = "Vehicule")
public class Vehicule {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private Long name;

    public Vehicule() {
    }

    public Vehicule(Long name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getName() {
        return name;
    }

    public void setName(Long name) {
        this.name = name;
    }
}
