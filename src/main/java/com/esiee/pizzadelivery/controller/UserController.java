package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.User;
import com.esiee.pizzadelivery.repository.UserRepository;
import com.esiee.pizzadelivery.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserRepository repository;

    @Autowired
    private UserService userService;

    @RequestMapping(value="/users", method= RequestMethod.GET)
    public List<User> getAllUsers() {
        logger.info("getAllUsers()");
        return repository.findAll();
    }

    @RequestMapping(value="/user/delete/{id}", method= RequestMethod.DELETE)
    public void deleteUser(@PathVariable Long id) {
        logger.info("deleteUser() for " + id);
        repository.deleteById(id);
    }

    @RequestMapping(value="/user/new", method= RequestMethod.POST)
    public ResponseEntity<User> newUser(@RequestBody User user) {
        logger.info("newUser() for " + user.getLogin());
        try {
            User summoner = userService.newUser(user);
            return new ResponseEntity<>(summoner, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
