package com.esiee.pizzadelivery.controller;

import com.esiee.pizzadelivery.model.Client;
import com.esiee.pizzadelivery.service.ClientService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class ClientController {

        private Logger logger = LoggerFactory.getLogger(ClientController.class);

        @Autowired
        private ClientService userService;

        @RequestMapping(value="/user/new", method= RequestMethod.POST)
        public Client newClient(@RequestBody Client user) {
            logger.info("newClient()");
            logger.info("name :" + user.getName());
            return userService.newClient(user);
        }

        @RequestMapping(value="/user/delete", method= RequestMethod.DELETE)
        public boolean deleteClient(@RequestParam String name) {
            logger.info("deleteClient()");
            userService.deleteClient(name);
            return true;
        }

        @RequestMapping(value="/user", method= RequestMethod.GET)
        public Client findClient(@RequestParam String name) throws Exception {
            logger.info("findClient()");
            return userService.findByName(name);
        }

        @RequestMapping(value="/user/all", method= RequestMethod.GET)
        public List<Client> findAll() throws Exception {
            logger.info("findAll()");
            return userService.findAll();
        }
}
