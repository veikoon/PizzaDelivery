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

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "taille_id", referencedColumnName = "id")
    private Taille taille;

    public Pizza(){

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
