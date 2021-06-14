package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Taille;
import com.esiee.pizzadelivery.model.User;
import com.esiee.pizzadelivery.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

        private Logger logger = LoggerFactory.getLogger(UserController.class);

        @Autowired
        private UserService userService;

        @RequestMapping(value="/user/new", method= RequestMethod.POST)
        public User newUser(@RequestBody User user) {
            logger.info("newUser()");
            logger.info("name :" + user.getName());
            return userService.newUser(user);
        }

        @RequestMapping(value="/user/delete", method= RequestMethod.DELETE)
        public boolean deleteUser(@RequestParam String name) {
            logger.info("deleteUser()");
            userService.deleteUser(name);
            return true;
        }

        @RequestMapping(value="/user", method= RequestMethod.GET)
        public User findUser(@RequestParam String name) throws Exception {
            logger.info("findUser()");
            return userService.findByName(name);
        }

        @RequestMapping(value="/user/all", method= RequestMethod.GET)
        public List<User> findAll() throws Exception {
            logger.info("findAll()");
            return userService.findAll();
        }
}
