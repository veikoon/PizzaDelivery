package com.esiee.pizzadelivery.model;

import javax.persistence.*;

@Entity
@Table(name = "Taille")
public class Taille {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private ETaille name;

    @Column(name = "prix")
    private float prix;

    public Taille(){

    }

    public Taille(ETaille name, int prix) {
        this.name = name;
        this.prix = prix;
    }

    public ETaille getName() {
        return name;
    }

    public void setName(ETaille name) {
        this.name = name;
    }

    public float getPrix() {
        return prix;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }
}
