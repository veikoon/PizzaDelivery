package com.esiee.pizzadelivery.model;

import javax.persistence.*;

@Entity
@Table(name = "Size")
public class Size {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "prix", nullable = false)
    private float prix;

    public Size(){

    }

    public Size(String name, int prix) {
        this.name = name;
        this.prix = prix;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrix() {
        return prix;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }
}
