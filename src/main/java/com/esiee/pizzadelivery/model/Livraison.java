package com.esiee.pizzadelivery.model;

import javax.persistence.*;
import java.sql.Date;
import java.util.Set;

@Entity
@Table(name = "Livraison")
public class Livraison {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;


    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="livreur", nullable=true)
    private Livreur livreur;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="vehicule", nullable=true)
    private Vehicule vehicule;

    @Column(name = "date")
    private Date date;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(	name = "livraison_pizza",
            joinColumns = @JoinColumn(name = "livraison_id"),
            inverseJoinColumns = @JoinColumn(name = "pizza_id"))
    private Set<Pizza> pizzas;

    @Column(name = "prixTotal")
    private float prix;
}
