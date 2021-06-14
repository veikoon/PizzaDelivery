package com.esiee.pizzadelivery.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Client")
public class Client {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "address", nullable = false)
    private String address;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "balance", nullable = false, columnDefinition="float default '0.0'")
    private float balance;

    @Column(name = "totalFacturation", columnDefinition="float default '0.0'")
    private float totalFacturation;

    @Column(name = "nbOrder", columnDefinition="integer default '0'")
    private int nbOrder;

    public Client() {
    }

    public Client(String name, String surname, String address, String phone) {
        this.name = name;
        this.surname = surname;
        this.address = address;
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
        return address;
    }

    public void setAdress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public float getMoney() {
        return balance;
    }

    public void setMoney(float money) {
        this.balance = money;
    }

    public float getSolde() {
        return balance;
    }

    public void setSolde(float balance) {
        this.balance = balance;
    }

    public float getTotalFacturation() {
        return totalFacturation;
    }

    public void setTotalFacturation(float totalFacturation) {
        this.totalFacturation = totalFacturation;
    }

    public int getNbCommande() {
        return nbOrder;
    }

    public void setNbCommande(int nbOrder) {
        this.nbOrder = nbOrder;
    }
}