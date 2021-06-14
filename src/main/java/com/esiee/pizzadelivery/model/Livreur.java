package com.esiee.pizzadelivery.model;

import javax.persistence.*;

@Entity
@Table(name = "Livreur")
public class Livreur {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "adress")
    private String adress;

    @Column(name = "phone")
    private String phone;

    public Livreur() {
    }

    public Livreur(String name, String surname, String adress, String phone) {
        this.name = name;
        this.surname = surname;
        this.adress = adress;
        this.phone = phone;
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

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
}
