package com.esiee.pizzadelivery.model;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "Delivery")
public class Delivery {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="staff", nullable = false)
    private Staff staff;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="client", nullable = false)
    private Client client;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="vehicule", nullable = false)
    private Vehicule vehicule;

    @Column(name = "date", nullable = false, columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Date date;

    @Column(name = "isLate", nullable = false, columnDefinition="boolean default false")
    private boolean isLate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pizza", nullable = false)
    private Pizza pizza;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "size", nullable = false)
    private Size size;

    public Delivery(Staff staff, Client client, Vehicule vehicule, boolean isLate, Pizza pizza, Size size) {
        this.staff = staff;
        this.client = client;
        this.vehicule = vehicule;
        this.isLate = isLate;
        this.pizza = pizza;
        this.size = size;
    }

    public Delivery() {
    }
}
