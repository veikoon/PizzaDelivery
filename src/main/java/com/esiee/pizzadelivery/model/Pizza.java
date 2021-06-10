package com.esiee.pizzadelivery.model;

import javax.persistence.*;

@Entity
@Table(name = "Pizza")
public class Pizza {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;


    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="pizza_taille", nullable=true)
    private Taille taille;


}
