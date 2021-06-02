package com.esiee.pizzadelivery.service;

import com.esiee.pizzadelivery.model.User;
import com.esiee.pizzadelivery.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    public String encryptPassword(String plainPassword){
        return passwordEncoder.encode(plainPassword);
    }

    public boolean doPasswordMatches(String plainPassword, String encryptedPassword){
        return passwordEncoder.matches(plainPassword, encryptedPassword);
    }

    public User newUser(User user){
        user.setPassword(encryptPassword(user.getPassword()));
        userRepository.save(user);
        return user;
    }

    public User getUserByLogin(String login){
        return userRepository.findByLogin(login)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + login));
    }
}
