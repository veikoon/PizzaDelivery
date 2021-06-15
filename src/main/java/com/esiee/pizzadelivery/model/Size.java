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

    @Column(name = "price", nullable = false)
    private float price;

    public Size(){

    }

    public Size(String name, int price) {
        this.name = name;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getprice() {
        return price;
    }

    public void setprice(float price) {
        this.price = price;
    }
}
