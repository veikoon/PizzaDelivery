package com.esiee.pizzadelivery.model;

import javax.persistence.*;

@Entity
@Table(name = "Staff")
public class Staff {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "surname", nullable = false)
    private String surname;

    @Column(name = "address")
    private String address;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "nbDelay", nullable = false, columnDefinition="integer default '0'")
    private int nbDelay;

    @Column(name = "age", nullable = false)
    private int age;

    public Staff() {
    }

    public Staff(String name, String surname, String address, String phone) {
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getNbDelay() {
        return nbDelay;
    }

    public void setNbDelay(int nbDelay) {
        this.nbDelay = nbDelay;
    }
}
