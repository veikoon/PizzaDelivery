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
}
