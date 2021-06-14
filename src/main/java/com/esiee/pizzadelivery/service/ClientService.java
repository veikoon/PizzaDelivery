package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Client;
import com.esiee.pizzadelivery.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository userRepository;

    public Client newClient(Client user){
        userRepository.save(user);
        return user;
    }

    public void deleteClient(String name){
        userRepository.deleteByName(name);
    }

    public Client findByName(String name){
        return userRepository.findByName(name);
    }

    public List<Client> findAll(){
        return userRepository.findAll();
    }
}
