package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.Taille;
import com.esiee.pizzadelivery.model.User;
import com.esiee.pizzadelivery.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User newUser(User user){
        userRepository.save(user);
        return user;
    }

    public void deleteUser(String name){
        userRepository.deleteByName(name);
    }

    public User findByName(String name){
        return userRepository.findByName(name);
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }
}
