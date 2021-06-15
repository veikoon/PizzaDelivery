package com.esiee.pizzadelivery.model;

import javax.persistence.*;

@Entity
@Table(name = "Size")
public class Size {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false, unique=true)
    private String name;

    @Column(name = "price", nullable = false)
    private float price;

    public Size(){

    }

    public Size(String name, int price) {
        this.name = name;
        this.price = price;
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

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }
}
